import { Item, GildedRose } from '@/gilded-rose';

/*
  Requirements:
	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item
  - Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
  - "Conjured" items degrade in Quality twice as fast as normal items
  Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
  legendary item and as such its Quality is 80 and it never alters.
*/

/*
  Analysis of requirements:
  - Each day, SellIn and Quality decrease (except Aged Brie)
  - "Conjured" item -> Quality decrease doubles
  - 0 < Quality <= 50
 */

const normalItem = 'normal';

describe('Gilded Rose', () => {
  describe('When we have a non-expired item in stock', () => {
    describe('When a day passes', () => {
      describe('When item is normal', () => {
        describe('When quality is above 1', () => {
          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(normalItem, 2, 2)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(1);
          });

          it("Should decrease the item's Quality", () => {
            const gildedRose = new GildedRose([new Item(normalItem, 2, 2)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(1);
          });
        });

        describe('When quality is 1', () => {
          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(normalItem, 2, 1)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(1);
          });

          it("Should decrease the item's Quality", () => {
            const gildedRose = new GildedRose([new Item(normalItem, 2, 1)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(0);
          });
        });

        describe('When quality is 0', () => {
          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(normalItem, 2, 0)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(1);
          });

          it("Shouldn't change the item's Quality", () => {
            const gildedRose = new GildedRose([new Item(normalItem, 2, 0)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(0);
          });
        });
      });
    });
  });

  describe('When we have an expiring item in stock', () => {
    describe('When a day passes', () => {
      describe("When item's quality is above 1", () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 1, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(0);
        });

        it("Should decrease the item's Quality by 1", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 1, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(1);
        });
      });

      describe("When item's quality is 1", () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 1, 1)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(0);
        });

        it("Should decrease the item's Quality by 1", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 1, 1)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(0);
        });
      });

      describe("When item's quality is 0", () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 1, 0)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(0);
        });

        it("Should not change the item's Quality", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 1, 0)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(0);
        });
      });
    });
  });

  describe('When we have an expired item in stock', () => {
    describe('When a day passes', () => {
      describe('When quality is above 1', () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 0, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(-1);
        });

        it("Should decrease the item's Quality by 2", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 0, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(0);
        });
      });

      describe('When quality is 1', () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 0, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(-1);
        });

        it("Should decrease the item's Quality to 0", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 0, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(0);
        });
      });

      describe('When quality is 0', () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 0, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(-1);
        });

        it("Should not change the item's Quality", () => {
          const gildedRose = new GildedRose([new Item(normalItem, 0, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(0);
        });
      });
    });
  });
});

import { Item, GildedRose } from '@/gilded-rose';

const normalItem = 'normal';

describe('Gilded Rose', () => {
  describe('When we have a normal item', () => {
    describe('When we have a non-expired item in stock', () => {
      describe('When a day passes', () => {
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
});

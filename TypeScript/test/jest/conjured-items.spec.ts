import { Item, GildedRose } from '@/gilded-rose';

const conjuredItem = 'conjured';

describe('Gilded Rose', () => {
  describe('When we have a conjured item', () => {
    describe('When we have a non-expired item in stock', () => {
      const sellIn = 2;

      describe('When a day passes', () => {
        describe('When Quality is above 2', () => {
          const initialQuality = 3;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 2", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 2);
          });
        });

        describe('When Quality is 2', () => {
          const initialQuality = 2;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 2", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 2);
          });
        });

        describe('When Quality is 1', () => {
          const initialQuality = 1;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 1", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 1);
          });
        });

        describe('When Quality is 0', () => {
          const initialQuality = 0;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Shouldn't change the item's Quality", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality);
          });
        });
      });
    });

    describe('When we have an expiring item in stock', () => {
      const sellIn = 1;

      describe('When a day passes', () => {
        describe('When Quality is above 2', () => {
          const initialQuality = 3;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 2", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 2);
          });
        });

        describe('When Quality is 2', () => {
          const initialQuality = 2;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 2", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 2);
          });
        });

        describe('When Quality is 1', () => {
          const initialQuality = 1;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 1", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 1);
          });
        });

        describe('When Quality is 0', () => {
          const initialQuality = 0;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Shouldn't change the item's Quality", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality);
          });
        });
      });
    });

    describe('When we have an expired item in stock', () => {
      const sellIn = 0;

      describe('When a day passes', () => {
        describe('When Quality is above 4', () => {
          const initialQuality = 5;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 4", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 4);
          });
        });

        describe('When Quality is 4', () => {
          const initialQuality = 4;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 4", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 4);
          });
        });

        describe('When Quality is 3', () => {
          const initialQuality = 3;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 3", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 3);
          });
        });

        describe('When Quality is 2', () => {
          const initialQuality = 2;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 3", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 2);
          });
        });

        describe('When Quality is 1', () => {
          const initialQuality = 1;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Should decrease the item's Quality by 3", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality - 1);
          });
        });

        describe('When Quality is 0', () => {
          const initialQuality = 0;

          it("Should decrease the item's SellIn", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
          });

          it("Shouldn't change the item's Quality", () => {
            const gildedRose = new GildedRose([new Item(conjuredItem, sellIn, initialQuality)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(initialQuality);
          });
        });
      });
    });
  });
});

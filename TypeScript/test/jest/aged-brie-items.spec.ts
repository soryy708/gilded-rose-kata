import { Item, GildedRose } from '@/gilded-rose';

const agedBrie = 'Aged Brie';

describe('Gilded Rose', () => {
  describe('When we have an Aged Brie item', () => {
    describe('When expiration is in the future', () => {
      const sellIn = 2;
      const startValue = 2;

      describe('When a day passes', () => {
        it('Should decrease SellIn by 1', () => {
          const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
        });

        describe('When Quality is less than 50', () => {
          it('Should increase Quality by 1', () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue + 1);
          });
        });

        describe('When Quality is 50', () => {
          const startValue = 50;

          it("Shouldn't change Quality", () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });
    });

    describe('When expiration is tomorrow', () => {
      const sellIn = 1;
      const startValue = 2;

      describe('When a day passes', () => {
        it('Should decrease SellIn by 1', () => {
          const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
        });

        describe('When Quality is less than 50', () => {
          it('Should increase Quality by 1', () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue + 1);
          });
        });

        describe('When Quality is 50', () => {
          const startValue = 50;

          it("Shouldn't change Quality", () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });
    });

    describe('When expiration is today', () => {
      const sellIn = 0;
      const startValue = 2;

      describe('When a day passes', () => {
        it('Should decrease SellIn by 1', () => {
          const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
        });

        describe('When Quality is less than 49', () => {
          it('Should increase Quality by 2', () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue + 2);
          });
        });

        describe('When Quality is 49', () => {
          const startValue = 49;

          it('Should increase Quality by 1', () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue + 1);
          });
        });

        describe('When Quality is 50', () => {
          const startValue = 50;

          it("Shouldn't change Quality", () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });
    });

    describe('When expiration is yesterday', () => {
      const sellIn = -1;
      const startValue = 2;

      describe('When a day passes', () => {
        it('Should decrease SellIn by 1', () => {
          const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(sellIn - 1);
        });

        describe('When Quality is less than 49', () => {
          it('Should increase Quality by 2', () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue + 2);
          });
        });

        describe('When Quality is 49', () => {
          const startValue = 49;

          it('Should increase Quality by 1', () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue + 1);
          });
        });

        describe('When Quality is 50', () => {
          const startValue = 50;

          it("Shouldn't change Quality", () => {
            const gildedRose = new GildedRose([new Item(agedBrie, sellIn, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });
    });
  });
});

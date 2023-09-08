import { GildedRose, Item } from '@/gilded-rose';

const backstagePasses = ['Backstage passes to a TAFKAL80ETC concert'];

describe('Gilded Rose', () => {
  describe('When we have a backstage pass', () => {
    // Assumption: sellIn = DaysToConcert
    describe.each(backstagePasses)('When the pass is %s', (item) => {
      const startValue = 10;

      describe('When we have more than 10 days until the concert', () => {
        const daysToConcert = 11;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          describe('When the value is less than 50', () => {
            it('Should increase quality by 1', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 1);
            });
          });

          describe('When the value is 50', () => {
            const startValue = 50;

            it("Shouldn't change the value", () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue);
            });
          });
        });
      });

      describe('When we have 10 days until the concert', () => {
        const daysToConcert = 10;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          describe('When the value is less than 49', () => {
            it('Should increase quality by 2', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 2);
            });
          });

          describe('When the value is 49', () => {
            const startValue = 49;

            it('Should increase quality by 1', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 1);
            });
          });

          describe('When the value is 50', () => {
            const startValue = 50;

            it("Shouldn't change the value", () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue);
            });
          });
        });
      });

      describe('When we have less than 10, more than 5 days until the concert', () => {
        const daysToConcert = 9;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          describe('When the value is less than 49', () => {
            it('Should increase quality by 2', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 2);
            });
          });

          describe('When the value is 49', () => {
            const startValue = 49;

            it('Should increase quality by 1', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 1);
            });
          });

          describe('When the value is 50', () => {
            const startValue = 50;

            it("Shouldn't change the value", () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue);
            });
          });
        });
      });

      describe('When we have 5 days until the concert', () => {
        const daysToConcert = 5;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          describe('When the value is less than 48', () => {
            it('Should increase quality by 3', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 3);
            });
          });

          describe('When the value is 48', () => {
            const startValue = 48;

            it('Should increase quality by 2', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 2);
            });
          });

          describe('When the value is 49', () => {
            const startValue = 49;

            it('Should increase quality by 1', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 1);
            });
          });

          describe('When the value is 50', () => {
            const startValue = 50;

            it("Shouldn't change the value", () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue);
            });
          });
        });
      });

      describe('When we have less than 5, more then 0 days until the concert', () => {
        const daysToConcert = 4;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          describe('When the value is less than 48', () => {
            it('Should increase quality by 3', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 3);
            });
          });

          describe('When the value is 48', () => {
            const startValue = 48;

            it('Should increase quality by 2', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 2);
            });
          });

          describe('When the value is 49', () => {
            const startValue = 49;

            it('Should increase quality by 1', () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue + 1);
            });
          });

          describe('When the value is 50', () => {
            const startValue = 50;

            it("Shouldn't change the value", () => {
              const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
              const afterUpdate = gildedRose.updateQuality();
              expect(afterUpdate[0].quality).toBe(startValue);
            });
          });
        });
      });

      describe('When the concert is today', () => {
        const daysToConcert = 0;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          it('Should set the quality to 0', () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(0);
          });
        });
      });

      describe('When the concert has passed', () => {
        const daysToConcert = -1;

        describe('When a day passes', () => {
          it("Should decrease the item's sellIn", () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(daysToConcert - 1);
          });

          it('Should set the quality to 0', () => {
            const gildedRose = new GildedRose([new Item(item, daysToConcert, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(0);
          });
        });
      });
    });
  });
});

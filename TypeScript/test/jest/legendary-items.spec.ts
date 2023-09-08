import { GildedRose, Item } from '@/gilded-rose';

const legendaryItems = ['Sulfuras, Hand of Ragnaros'];

describe('Gilded Rose', () => {
  describe('When we have a Legendary Item', () => {
    describe.each(legendaryItems)('When the item is %s', (item) => {
      const startValue = 80;

      describe('When SellIn is positive', () => {
        describe('When a day passes', () => {
          it('Should not change sellIn', () => {
            const gildedRose = new GildedRose([new Item(item, 1, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(1);
          });

          it('Should not change quality', () => {
            const gildedRose = new GildedRose([new Item(item, 1, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });

      describe('When SellIn is 0', () => {
        describe('When a day passes', () => {
          it('Should not change sellIn', () => {
            const gildedRose = new GildedRose([new Item(item, 0, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(0);
          });

          it('Should not change quality', () => {
            const gildedRose = new GildedRose([new Item(item, 1, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });

      describe('When SellIn is negative', () => {
        describe('When a day passes', () => {
          it('Should not change sellIn', () => {
            const gildedRose = new GildedRose([new Item(item, -1, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].sellIn).toBe(-1);
          });

          it('Should not change quality', () => {
            const gildedRose = new GildedRose([new Item(item, 1, startValue)]);
            const afterUpdate = gildedRose.updateQuality();
            expect(afterUpdate[0].quality).toBe(startValue);
          });
        });
      });
    });
  });
});

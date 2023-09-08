import { Item, GildedRose } from '@/gilded-rose';

const agedBrie = 'Aged Brie';

describe('Gilded Rose', () => {
  describe('When we have an Aged Brie item', () => {
    describe('When we have a non-expired item in stock', () => {
      describe('When a day passes', () => {
        it("Should decrease the item's SellIn", () => {
          const gildedRose = new GildedRose([new Item(agedBrie, 2, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].sellIn).toBe(1);
        });

        it("Should increase the item's Quality", () => {
          const gildedRose = new GildedRose([new Item(agedBrie, 2, 2)]);
          const afterUpdate = gildedRose.updateQuality();
          expect(afterUpdate[0].quality).toBe(3);
        });
      });
    });
  });
});

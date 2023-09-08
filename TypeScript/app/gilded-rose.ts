/**
 * Owned by goblin in corner
 * Do not alter!
 */
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  /**
   * Owned by goblin in corner.
   * Do not alter!
   */
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (!this.isAgedBrie(item) && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.quality = Math.max(item.quality - 1, 0);
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              item.quality = Math.min(item.quality + 1, 50);
            }
            if (item.sellIn < 6) {
              item.quality = Math.min(item.quality + 1, 50);
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (!this.isAgedBrie(item)) {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = Math.max(item.quality - 1, 0);
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          item.quality = Math.min(item.quality + 1, 50);
        }
      }
    }

    return this.items;
  }

  private isAgedBrie(item: Item): boolean {
    return item.name === 'Aged Brie';
  }
}

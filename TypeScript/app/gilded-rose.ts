const backstageThreshold2 = 10;
const backstageThreshold3 = 5;

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
      if (this.isAgedBrie(item) || this.isBackstagePass(item)) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (this.isBackstagePass(item)) {
            if (item.sellIn <= backstageThreshold2) {
              item.quality = Math.min(item.quality + 1, 50);
            }
            if (item.sellIn <= backstageThreshold3) {
              item.quality = Math.min(item.quality + 1, 50);
            }
          }
        }
      } else if (!this.isLegendary(item)) {
        item.quality = Math.max(item.quality - 1, 0);
      }
      if (item.sellIn <= 0) {
        if (this.isAgedBrie(item)) {
          item.quality = Math.min(item.quality + 1, 50);
        } else if (this.isBackstagePass(item)) {
          item.quality = item.quality - item.quality;
        } else if (!this.isLegendary(item)) {
          item.quality = Math.max(item.quality - 1, 0);
        }
      }

      if (!this.isLegendary(item)) {
        item.sellIn = item.sellIn - 1;
      }
    }

    return this.items;
  }

  private isAgedBrie(item: Item): boolean {
    return item.name === 'Aged Brie';
  }

  private isBackstagePass(item: Item): boolean {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  private isLegendary(item: Item): boolean {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }
}

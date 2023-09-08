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
      this.updateItemQuality(item);
      this.updateItemSellIn(item);
    }

    return this.items;
  }

  private updateItemQuality(item: Item): void {
    if (this.isLegendary(item)) {
      return;
    }
    if (this.isBackstagePass(item) && this.isExpired(item)) {
      item.quality = 0;
      return;
    }

    let qualityDelta = 0;
    if (this.isAgedBrie(item) || this.isBackstagePass(item)) {
      qualityDelta = 1;
      if (this.isBackstagePass(item)) {
        if (item.sellIn <= backstageThreshold2) {
          qualityDelta = 2;
        }
        if (item.sellIn <= backstageThreshold3) {
          qualityDelta = 3;
        }
      }
    } else {
      qualityDelta -= 1;
    }
    if (this.isExpired(item)) {
      qualityDelta += this.isAgedBrie(item) ? 1 : -1;
    }
    item.quality = Math.min(50, Math.max(0, item.quality + qualityDelta));
  }

  private updateItemSellIn(item: Item): void {
    if (!this.isLegendary(item)) {
      item.sellIn = item.sellIn - 1;
    }
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

  private isExpired(item: Item): boolean {
    return item.sellIn <= 0;
  }
}

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
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert
  - "Conjured" items degrade in Quality twice as fast as normal items
  Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
  legendary item and as such its Quality is 80 and it never alters.
*/

/*
  Analysis of requirements:
  - Each day, SellIn and Quality decrease (except Aged Brie)
  - SellIn < 0 -> Quality decrease doubles
  - "Conjured" item -> Quality decrease doubles
  - "Aged Brie" increases in quality each day
  - Legendary items (e.g. "Sulfuras") never decrases in quality
  - 0 < Quality <= 50
  - "Backstage passes" e.g. "Aged Brie"
    - DaysToConcert <  0  -> Quality  = 0
    - DaysToConcert <= 5  -> Quality += 3
    - DaysToConcert <= 10 -> Quality += 2

 */

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

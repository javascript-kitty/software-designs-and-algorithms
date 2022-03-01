import { Pages } from "./Pages";

export const PagesIterable = (superclass: any) =>
  class extends superclass {
    [Symbol.iterator]() {
      // Use a new index for each iterator. This makes multiple
      // iterations over the iterable safe for non-trivial cases,
      // such as use of break or nested looping over the same iterable.
      let index = 0;

      return {
        next: () => {
          if (index < this.pages.getPages().length) {
            const value = `${this.toString()}, ${this.pages
              .getPage(index)
              .toString()}`;
            index++;
            return {
              value,
              done: false,
            };
          } else {
            return { done: true };
          }
        },
      };
    }
  };

export abstract class Item extends PagesIterable(Object) {
  protected pages: Pages;
  constructor(pages: Pages) {
    super();
    this.pages = pages;
  }
  abstract toString(): string;
}

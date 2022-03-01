import { Item } from "./item";
import { Pages } from "./Pages";

export class Magazine extends Item {
  pages: Pages;
  title: string;

  constructor(title: string, pages: Pages) {
    super(pages);
    this.pages = pages;
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string): void {
    this.title = value;
  }

  toString() {
    return `Magazine: ${
      this.title
    } with number of pages: ${this.pages.getLength()}`;
  }
}

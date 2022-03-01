import { Item } from "./item";
import { Pages } from "./Pages";

export class Book extends Item {
  pages: Pages;
  title: string;
  author: string;

  constructor(title: string, author: string, pages: Pages) {
    super(pages);
    this.pages = pages;
    this.title = title;
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  setTitle(value: string): void {
    this.title = value;
  }

  setAuthor(value: string): void {
    this.author = value;
  }

  toString() {
    return `Book: ${this.title} by ${
      this.author
    } with number of pages: ${this.pages.getLength()}`;
  }
}

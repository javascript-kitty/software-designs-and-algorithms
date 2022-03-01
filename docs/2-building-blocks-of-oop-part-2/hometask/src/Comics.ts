import { Item } from "./item";
import { Pages } from "./Pages";

export class Comics extends Item {
  pages: Pages;
  title: string;
  author: string;
  artist: string;

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super(pages);
    this.pages = pages;
    this.title = title;
    this.author = author;
    this.artist = artist;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getArtist(): string {
    return this.artist;
  }

  setTitle(value: string): void {
    this.title = value;
  }

  setAuthor(value: string): void {
    this.author = value;
  }

  setArtist(value: string): void {
    this.artist = value;
  }

  toString() {
    return `Comics: ${this.title} by ${this.author}, the artist is ${
      this.artist
    }, number of pages: ${this.pages.getLength()}`;
  }
}

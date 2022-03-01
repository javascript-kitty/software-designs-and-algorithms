import { Page } from "./Page";

export class Pages {
  private _pages: Page[];
  constructor(pages: Page[]) {
    this._pages = pages;
  }

  setPages(value: Page[]) {
    this._pages = value;
  }
  getPages(): Page[] {
    return this._pages;
  }
  getPage(index: number): Page {
    return this._pages[index];
  }
  getLength(): number {
    return this._pages.length;
  }
}

export class Page {
  pageNumber: number;
  pageType: string;
  pageMaterial: string;

  constructor(pageNumber: number, pageType: string, pageMaterial: string) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }
  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}

enum BookEnum {
  COMICS = "comics",
  BOOK = "book",
  MAGAZINE = "magazine",
}
type PropsType = { pageNumber: number; pageType: string; pageMaterial: string };

export class PageFactory {
  static getPage(type: BookEnum, properties: PropsType): Page {
    const pageType =
      type === BookEnum.BOOK
        ? "with text"
        : BookEnum.COMICS
        ? "with images"
        : "with article";
    const pageMaterial =
      type === BookEnum.BOOK ? "simple paper" : "glossy paper";

    return new Page(properties.pageNumber, pageType, pageMaterial);
  }
}

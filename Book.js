export class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = 1;
    this.read = false;
  }
  readBook(page) {
    if (page < 1 || page > this.pages) {
      return 0;
    } else if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page === this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}

const firstBook = new Book(
  "L'ange des oubliés",
  "Heinze Konsalik",
  "Le héros des lépreux",
  410,
  true
);

const secondBook = new Book(
  "Le livre d'amour",
  "Raoul Follereau",
  "Vivre c'est aider les autres à vivre!",
  93,
  true
);

const thirdBook = new Book(
  "Réflechissez et devenez riche",
  "Napoléon Hill",
  "La foi",
  25,
  false
);

export const books = [firstBook, secondBook, thirdBook];

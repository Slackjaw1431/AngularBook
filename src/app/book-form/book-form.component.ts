import { Component, OnInit } from "@angular/core";
import { BookService } from "../post.service";
import { Book } from "../book.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"],
})
export class BookFormComponent implements OnInit {
  newBook: Book = {
    id: 0,
    bookTitle: "",
    author: "",
    category: "",
    quantity: 0,
    bookPrice: 0,
  };

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.bookService.addBook(this.newBook).subscribe((addedBook) => {
      console.log("Added Book:", addedBook);
      this.newBook = {
        id: 0,
        bookTitle: "",
        author: "",
        category: "",
        quantity: 0,
        bookPrice: 0,
      };
      this.goToBooks();
    });
  }

  saveBook() {
    this.bookService.addBook(this.newBook);
    this.goToBooks();
  }

  goToBooks() {
    this.router.navigate(["/books"]);
  }
}

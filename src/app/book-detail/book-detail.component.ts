import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { variable } from "@angular/compiler/src/output/output_ast";
import { Book } from "../book.model";
import { BookService } from "../post.service";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent {
  book_id: number;
  book: Book = new Book(0, "", "", "", 0, 0);

  constructor(
    private actRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.book_id = this.actRoute.snapshot.params.id;

    this.bookService.getBookById(this.book_id).subscribe(
      (data) => {
        this.book = data;
      },
      (error) => console.log(error)
    );
  }
}

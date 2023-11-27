import { Component, Input, OnInit } from "@angular/core";
import { Book } from "../book.model";
import { BookService } from "../post.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-update-book",
  templateUrl: "./update-book.component.html",
  styleUrls: ["./update-book.component.css"],
})
export class UpdateBookComponent {
  book_id: number;
  book: Book = new Book(0, "", "", "", 0, 0);

  constructor(
    private actRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.book_id = this.actRoute.snapshot.params.id;

    this.bookService.getBookById(this.book_id).subscribe(
      (data) => {
        this.book = data;
      },
      (error) => console.log(error)
    );
  }

  onUpdate() {
    this.bookService.updateBook(this.book).subscribe((updatedBook) => {
      console.log("Updated Book:", updatedBook);
      this.router.navigate(["/books"]);
    });
  }
}

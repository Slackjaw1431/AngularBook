import { Component, OnInit } from "@angular/core";
import { BookService } from "../post.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  posts: any;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getPost().subscribe((response) => {
      this.posts = response;
    });
  }
}

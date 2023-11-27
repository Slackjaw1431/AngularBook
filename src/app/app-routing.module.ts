import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";
import { ListComponent } from "./list/list.component";
import { BookFormComponent } from "./book-form/book-form.component";
import { UpdateBookComponent } from "./update-book/update-book.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "books", component: BooksComponent },
  { path: "book-detail/:id", component: BookDetailComponent },
  { path: "book-delete/:id", component: BooksComponent },
  { path: "list", component: ListComponent },
  { path: "update-book/:id", component: UpdateBookComponent },
  { path: "**", component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

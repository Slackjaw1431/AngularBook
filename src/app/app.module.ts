import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";
import { FormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { HttpClientModule } from "@angular/common/http";
import { BookFormComponent } from "./book-form/book-form.component";
import { UpdateBookComponent } from "./update-book/update-book.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookDetailComponent,
    NoPageFoundComponent,
    ListComponent,
    BookFormComponent,
    UpdateBookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

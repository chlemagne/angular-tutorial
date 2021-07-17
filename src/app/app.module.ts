import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule // enable two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    LikeComponent,
    AccordionComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // enable two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

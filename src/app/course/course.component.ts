import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "List of courses";
  courses;
  angularCourse;
  imageUrl = "https://lorempixel.com/400/210/";
  isActive = false;
  inputValue = "Enter something here";

  constructor(service: CourseService) {
    this.courses = service.getCourses();
    this.angularCourse = service.getAngularCourse();
  }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    event.stopPropagation(); // stop event bubbling

    console.log("Clicked!", event);
  }

  onKeyUpEnter() {
    console.log(this.inputValue);
  }
}

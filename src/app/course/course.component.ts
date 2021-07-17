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
  imageUrl = "https://lorempixel.com/400/210/";
  isActive = false;

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    event.stopPropagation(); // stop event bubbling

    console.log("Clicked!", event);
  }

  onKeyUpEnter(value: String) {
    console.log(value);
  }
}

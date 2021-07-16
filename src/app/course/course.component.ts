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

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}

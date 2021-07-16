import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    return ["Differential Calculus", "Analytical Geometry", "Physics"];
  }
}

import { Component, OnInit } from '@angular/core';
import Course from './course';
import CourseService from './course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    this._coursesFilter(this._filterBy);
  }

  get filter() {
    return this._filterBy;
  }

  private _coursesFilter(value: string) {
    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >
          -1 ||
        course.price
          .toString()
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) > -1 ||
        course.code
          .toString()
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) > -1 ||
        course.releaseDate
          .toString()
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) > -1 ||
        course.rating
          .toString()
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) > -1
    );
  }
}

import { Component, OnInit } from '@angular/core';

import Course from '../course';

import CourseService from '../course.service';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: (error) => console.log('Error: ', error),
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        if (confirm('Deleted successfully!')) this.retrieveAll();
      },
      error: (error) => console.log('Error: ', error),
    });
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
      (key) =>
        JSON.stringify(key).toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}

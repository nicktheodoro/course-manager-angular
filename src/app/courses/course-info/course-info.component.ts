import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Course from '../course';
import CourseService from '../course.service';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseService
      .retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe({
        next: (course) => (this.course = course),
        error: (error) => console.log('Error: ', error),
      });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: () => {
        if (confirm('Updated successfully!'))
          this.router.navigate(['./courses']);
      },
      error: (error) => console.log('Error', error),
    });
  }
}

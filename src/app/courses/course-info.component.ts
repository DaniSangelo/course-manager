import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";


@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
  course!: Course;
  courseId: any = '';

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void{

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id') === null ? 0 : this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId !== null && this.courseId !== '')
      this.course = this.courseService.retrieveById(+this.courseId);
  }
  save(): void{
    this.courseService.save(this.course);
  }
}

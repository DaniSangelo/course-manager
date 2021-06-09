import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms'
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@NgModule({
  declarations:[
    CourseInfoComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path:'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: 'courses', component: CourseListComponent
      },
    ])
  ]
})

export class CourseModule {

}

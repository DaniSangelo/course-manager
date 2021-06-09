import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
  declarations:[
    CourseInfoComponent,
    CourseListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
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

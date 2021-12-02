import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    NavBarComponent,
    ReplacePipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', // a rota base da aplicação
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      {
        path: '**', // quando não encontra a rota na nossa aplicação
        component: NotFoundComponent,
      },
      {
        path: 'courses',
        component: CourseListComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

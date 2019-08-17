import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {QuizMultiComponent} from './quiz-multi/quiz-multi.component';

const routes: Routes = [
  {path: '', component: QuizComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'quizMulti', component: QuizMultiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

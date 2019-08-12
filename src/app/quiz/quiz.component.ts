import { Component, OnInit } from '@angular/core';
import data from '../../data.json';
import {QuizQuestion} from '../quiz-question';
import {QuizAnswer} from '../quiz-answer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: string;
  chosenAnswer: QuizAnswer;
  isCorrect: string;
  answers: QuizAnswer [];
  questions: QuizQuestion [];
  chosenid: number;

  constructor() { }

  ngOnInit() {
    this.chosenid = 0;
    this.questions = data;
    this.question = this.questions[this.chosenid].question;
    this.answers = this.questions[this.chosenid].answers;
  }

  onChange() {
    if (this.chosenAnswer.isTrue) {
      this.isCorrect = 'You\'re right!';
    } else {
      this.isCorrect = 'Wrong';
    }
  }

  nextQuestion() {
    this.chosenid = (this.chosenid + 1) % this.questions.length;
    this.question = this.questions[this.chosenid].question;
    this.answers = this.questions[this.chosenid].answers;
    this.isCorrect = 'Waiting for your answer...';
  }
}

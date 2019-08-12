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
  chosenAnswer: QuizAnswer;
  isCorrect = '⏳ Waiting for your answer... ⏳';
  questions: QuizQuestion [];
  chosenid: number;
  currentQuestion: QuizQuestion;

  constructor() { }

  ngOnInit() {
    this.chosenid = 0;
    this.questions = data;
    this.currentQuestion = this.questions[this.chosenid];
  }

  onChange() {
    if (this.chosenAnswer.isTrue) {
      this.isCorrect = 'You\'re right! ✅';
    } else {
      this.isCorrect = 'Wrong 😥';
    }
  }

  nextQuestion() {
    this.chosenid = (this.chosenid + 1) % this.questions.length;
    this.currentQuestion = this.questions[this.chosenid];
    this.isCorrect = '⏳ Waiting for your answer... ⏳';
  }

  randomQuestion() {
    this.chosenid = Math.floor((Math.random() * this.questions.length));
    this.currentQuestion = this.questions[this.chosenid];
    this.isCorrect = '⏳ Waiting for your answer... ⏳';
  }
}

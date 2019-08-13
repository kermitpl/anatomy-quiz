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
  tryCount = 0;

  constructor() { }

  ngOnInit() {
    this.chosenid = 0;
    this.questions = data;
    this.currentQuestion = this.questions[this.chosenid];
  }

  onChange() {
    this.tryCount++;
    if (this.chosenAnswer.isTrue) {
      this.isCorrect = 'You\'re right! ✅';
      if (this.tryCount === 1) {
        this.questions.splice(this.chosenid, 1);
      }
    } else {
      this.isCorrect = 'Wrong 😥';
    }
  }

  nextQuestion(choice) {
    if (this.questions.length === 0) {
      alert('Quiz is completed, please reload page.');
    } else {
      if (choice === 0) { this.chosenid = (this.chosenid + 1) % this.questions.length; } else if (choice === 1) {
        this.chosenid = Math.floor((Math.random() * this.questions.length)); }
      this.currentQuestion = this.questions[this.chosenid];
      this.tryCount = 0;
      this.isCorrect = '⏳ Waiting for your answer... ⏳';
    }
  }

}

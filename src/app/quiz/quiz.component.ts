import { Component, OnInit } from '@angular/core';
import osteologia from '../../assets/question_data/one/osteologia_one.json';
import czaszka from '../../assets/question_data/one/czaszka_one.json';
import embrio from '../../assets/question_data/one/embrio_one.json';
import brzuch from '../../assets/question_data/one/brzuch_one.json';
import gis from '../../assets/question_data/one/gis_one.json';
import kd from '../../assets/question_data/one/kd_one.json';
import kg from '../../assets/question_data/one/kg_one.json';
import klatka from '../../assets/question_data/one/klatka_one.json';
import miednica from '../../assets/question_data/one/miednica_one.json';
import oun from '../../assets/question_data/one/oun_one.json';
import {QuizQuestion} from '../model/quiz-question';
import {QuizAnswer} from '../model/quiz-answer';

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
  selectedData = 'osteologia';

  constructor() { }

  ngOnInit() {
    this.chosenid = 0;
    this.questions = osteologia;
    this.currentQuestion = this.questions[this.chosenid];
  }

  onChange() {
    this.tryCount++;
    if (this.chosenAnswer.isTrue) {
      this.isCorrect = 'You\'re right! ✅';
      if (this.tryCount === 1) {
        this.questions.splice(this.chosenid, 1);
        this.chosenid = this.chosenid - 1;
      }
    } else {
      this.isCorrect = 'Wrong 😥';
    }
  }

  nextQuestion(choice) {
    if (this.questions.length === 0) {
      alert('Quiz is completed, page will be reloaded.');
      window.location.reload();
    } else {
      if (choice === 0) { this.chosenid = (this.chosenid + 1) % this.questions.length; } else if (choice === 1) {
        this.chosenid = Math.floor((Math.random() * this.questions.length)); }
      this.currentQuestion = this.questions[this.chosenid];
      this.tryCount = 0;
      this.isCorrect = '⏳ Waiting for your answer... ⏳';
    }
  }

  dataChanged() {
    switch (this.selectedData) {
      case 'osteologia':
        this.questions = osteologia;
        break;
      case 'czaszka':
        this.questions = czaszka;
        break;
      case 'brzuch':
        this.questions = brzuch;
        break;
      case 'embrio':
        this.questions = embrio;
        break;
      case 'gis':
        this.questions = gis;
        break;
      case 'kd':
        this.questions = kd;
        break;
      case 'kg':
        this.questions = kg;
        break;
      case 'miednica':
        this.questions = miednica;
        break;
      case 'oun':
        this.questions = oun;
        break;
      case 'klatka':
        this.questions = klatka;
        break;
    }
    this.chosenid = 0;
    this.currentQuestion = this.questions[this.chosenid];
    this.tryCount = 0;
    this.isCorrect = '⏳ Waiting for your answer... ⏳';
  }

}

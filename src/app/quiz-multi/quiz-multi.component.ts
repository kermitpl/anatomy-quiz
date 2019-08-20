import { Component, OnInit } from '@angular/core';
import osteologia from '../../assets/question_data/multi/osteologia_multi.json';
import czaszka from '../../assets/question_data/multi/czaska_multi.json';
import embrio from '../../assets/question_data/multi/embriologia_multi.json';
import brzuch from '../../assets/question_data/multi/brzuch_multi.json';
import gis from '../../assets/question_data/multi/gis_multi.json';
import kd from '../../assets/question_data/multi/kd_multi.json';
import kg from '../../assets/question_data/multi/kg_multi.json';
import klatka from '../../assets/question_data/multi/klatka_multi.json';
import miednica from '../../assets/question_data/multi/miednica_multi.json';
import oun from '../../assets/question_data/multi/oun_multi.json';
import {QuizQuestion} from '../model/quiz-question';
import {QuizAnswer} from '../model/quiz-answer';

@Component({
  selector: 'app-quiz-multi',
  templateUrl: './quiz-multi.component.html',
  styleUrls: ['./quiz-multi.component.css']
})
export class QuizMultiComponent implements OnInit {
  chosenAnswer: QuizAnswer;
  isCorrect = '⏳ Waiting for your answer... ⏳';
  questions: QuizQuestion [];
  chosenid: number;
  currentQuestion: QuizQuestion;
  tryCount = 0;
  checkAnswers: boolean [];
  selectedData = 'brzuch';

  // ng build --prod --output-path docs --base-href /anatomy-quiz/

  constructor() { }

  ngOnInit() {
    this.chosenid = 0;
    this.questions = brzuch;
    this.currentQuestion = this.questions[this.chosenid];
    this.checkAnswers = [false, false, false, false];
  }

  onChange(isTrue) {
    this.tryCount++;
    if (isTrue) {
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
      this.checkAnswers = [false, false, false, false];
      this.isCorrect = '⏳ Waiting for your answer... ⏳';
    }
  }

  checkQuestion() {
    let isTrue = true;
    for (const j of [0, 1, 2, 3]) {
      if (this.currentQuestion.answers[j].isTrue !== this.checkAnswers[j]) {
        isTrue = false;
      }
    }
    this.onChange(isTrue);
  }

  showAnswer() {
    for (const j of [0, 1, 2, 3]) {
      this.checkAnswers[j] = this.currentQuestion.answers[j].isTrue;
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

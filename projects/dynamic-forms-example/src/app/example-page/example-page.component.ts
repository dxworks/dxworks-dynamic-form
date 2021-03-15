import { Component } from '@angular/core';
import {QuestionBase} from '../types/question-base';
import {Observable} from 'rxjs';
import {QuestionService} from '../providers/question.service';

@Component({
  selector: 'dxf-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}

import {NgModule} from '@angular/core';
import {QuestionControlService} from './question-control.service';
import {QuestionService} from './question.service';

@NgModule({
  imports: [
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ]
})
export class ProvidersModule {
}

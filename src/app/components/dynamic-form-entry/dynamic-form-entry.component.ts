import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {QuestionBase} from '../../types/question-base';


@Component({
  selector: 'adf-dynamic-form-entry',
  templateUrl: './dynamic-form-entry.component.html'
})
export class DynamicFormEntryComponent {

  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
}

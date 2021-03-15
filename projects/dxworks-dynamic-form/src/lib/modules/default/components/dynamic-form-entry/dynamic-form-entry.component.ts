import { Component, Input } from '@angular/core';
import {QuestionBase} from '../../../../types/question-base';


@Component({
  selector: 'dxf-dynamic-form-entry',
  templateUrl: './dynamic-form-entry.component.html'
})
export class DynamicFormEntryComponent {

  @Input()
  formEntryDataData: QuestionBase<any>;
  @Input()
  styleType: string;
}

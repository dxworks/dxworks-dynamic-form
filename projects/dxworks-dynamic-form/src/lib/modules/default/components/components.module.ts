import {NgModule} from '@angular/core';
import {ProvidersModule} from '../../../providers/providers.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DynamicFormEntryComponent} from './dynamic-form-entry/dynamic-form-entry.component';

const components = [
  DynamicFormComponent,
  DynamicFormEntryComponent
];

@NgModule({
  imports: [
    ProvidersModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: components,
  declarations: components
})
export class ComponentsModule {
}

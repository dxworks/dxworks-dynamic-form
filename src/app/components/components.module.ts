import {NgModule} from '@angular/core';
import {ProvidersModule} from '../providers/providers.module';
import {MaterialModule} from '../material.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormEntryComponent} from './dynamic-form-entry/dynamic-form-entry.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const components = [
  DynamicFormComponent,
  DynamicFormEntryComponent
];

@NgModule({
  imports: [
    ProvidersModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: components,
  declarations: components
})
export class ComponentsModule {
}

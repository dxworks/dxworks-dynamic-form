import {NgModule} from '@angular/core';
import {ProvidersModule} from '../../../providers/providers.module';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const components = [
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentsModule} from './components/components.module';

const components = [
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule
  ],
  exports: components,
  declarations: components
})
export class AngularMaterialModule {
}

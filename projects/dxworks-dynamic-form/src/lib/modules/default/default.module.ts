import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from './components/components.module';

const components = [
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ComponentsModule
  ],
  exports: components,
  declarations: components
})
export class DefaultModule {
}

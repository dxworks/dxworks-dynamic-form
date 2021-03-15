import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';

const components = [
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: components,
  declarations: components
})
export class BootstrapModule {
}

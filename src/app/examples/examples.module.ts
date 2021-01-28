import {NgModule} from '@angular/core';
import {ProvidersModule} from '../providers/providers.module';
import {MaterialModule} from '../material.module';
import {ExamplePageComponent} from './example-page/example-page.component';
import {ComponentsModule} from '../components/components.module';

const components = [
  ExamplePageComponent
];

@NgModule({
  imports: [
    ProvidersModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
  ],
  declarations: components
})
export class ExamplesModule {
}

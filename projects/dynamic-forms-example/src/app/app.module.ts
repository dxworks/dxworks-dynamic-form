import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExamplePageComponent} from './example-page/example-page.component';
import {ProvidersModule} from './providers/providers.module';
import {DxworksDynamicFormModule} from '../../../dxworks-dynamic-form/src';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProvidersModule,
    ReactiveFormsModule,
    DxworksDynamicFormModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

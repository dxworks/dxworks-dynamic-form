import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './modules/angular-material/angular-material.module';
import {BootstrapModule} from './modules/bootstrap/bootstrap.module';
import {DefaultModule} from './modules/default/default.module';
import {PrimeNgModule} from './modules/prime-ng/prime-ng.module';
import {SharedModule} from './modules/shared/shared.module';


@NgModule({
  imports: [
    AngularMaterialModule,
    BootstrapModule,
    DefaultModule,
    PrimeNgModule,
    SharedModule
  ],
  declarations: [],
  exports: [
    AngularMaterialModule,
    BootstrapModule,
    DefaultModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [
  ]
})
export class DxworksDynamicFormModule {}

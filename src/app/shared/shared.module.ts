import { NgModule } from "@angular/core";
import { PrimengMaterialModule } from "../core/material/primengMaterial.module";
import { HeaderComponent } from "./components/header/header.component";
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BaseLayoutComponent
  ],
  imports: [
    PrimengMaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }

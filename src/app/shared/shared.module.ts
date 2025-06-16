import { NgModule } from "@angular/core";
import { PrimengMaterialModule } from "../core/material/primengMaterial.module";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    PrimengMaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }

import { NgModule } from "@angular/core";
import { PrimengMaterialModule } from "../core/material/primengMaterial.module";
import { HeaderComponent } from "./components/header/header.component";
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
@NgModule({
  declarations: [
    HeaderComponent,
    CardDashboardComponent
  ],
  imports: [
    PrimengMaterialModule
  ],
  exports: [
    HeaderComponent,
    CardDashboardComponent
  ]
})
export class SharedModule { }

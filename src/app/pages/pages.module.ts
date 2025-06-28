import { NgModule } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengMaterialModule } from '../core/material/primengMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    BaseLayoutComponent, 
    DashboardComponent],
  imports: [
    PrimengMaterialModule,
    SharedModule,
    RouterModule
    
  ],
  exports: [
    BaseLayoutComponent, 
    DashboardComponent],
})
export class PagesModule {}

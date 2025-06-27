import { NgModule } from "@angular/core";

import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Menubar } from 'primeng/menubar';


import { DividerModule } from 'primeng/divider';
import { DrawerModule } from 'primeng/drawer';

@NgModule({
  imports: [
    Toast,
    ButtonModule,
    Ripple,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    AvatarModule,
    OverlayBadgeModule,
    FloatLabelModule,
    Menubar,
    DrawerModule,
    DividerModule
  ],
  exports: [
    Toast,
    ButtonModule,
    Ripple,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    AvatarModule,
    OverlayBadgeModule,
    FloatLabelModule,
    Menubar,
    DrawerModule,
    DividerModule
  ]
})
export class PrimengMaterialModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { Noir } from '../../style';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';

import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DividerModule
  ],
  providers: [
    provideHttpClient(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        }
      }
    }),
    provideAnimations(),
    MessageService,
    ConfirmationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

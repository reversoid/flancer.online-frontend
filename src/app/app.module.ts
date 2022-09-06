import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TogglerComponent } from './shared/components/toggler/toggler.component';
import { HeaderRoleComponent } from './shared/components/header-role/header-role.component';
import { store } from './shared/data/NgRx/store';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    TogglerComponent,
    HeaderRoleComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(store),
    MatProgressBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

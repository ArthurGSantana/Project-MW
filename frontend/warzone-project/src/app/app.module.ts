import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './statics/header/header.component';
import { FooterComponent } from './statics/footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { HomeComponent } from './templates/home/home.component';
import { TransitionComponent } from './transition/transition.component';
import { GunsComponent } from './templates/guns/guns.component';
import { AssaultRiffleComponent } from './guns-components/assault-riffle/assault-riffle.component';
import { SmgsComponent } from './guns-components/smgs/smgs.component';
import { ShotgunComponent } from './guns-components/shotgun/shotgun.component';
import { LmgsComponent } from './guns-components/lmgs/lmgs.component';
import { MarksmanComponent } from './guns-components/marksman/marksman.component';
import { SniperComponent } from './guns-components/sniper/sniper.component';
import { HandgunComponent } from './guns-components/handgun/handgun.component';
import { RpgsComponent } from './guns-components/rpgs/rpgs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TransitionComponent,
    GunsComponent,
    AssaultRiffleComponent,
    SmgsComponent,
    ShotgunComponent,
    LmgsComponent,
    MarksmanComponent,
    SniperComponent,
    HandgunComponent,
    RpgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

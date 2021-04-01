import { MapsComponent } from './templates/maps/maps.component';
import { RpgsComponent } from './guns-components/rpgs/rpgs.component';
import { HandgunComponent } from './guns-components/handgun/handgun.component';
import { SniperComponent } from './guns-components/sniper/sniper.component';
import { MarksmanComponent } from './guns-components/marksman/marksman.component';
import { LmgsComponent } from './guns-components/lmgs/lmgs.component';
import { ShotgunComponent } from './guns-components/shotgun/shotgun.component';
import { SmgsComponent } from './guns-components/smgs/smgs.component';
import { GunsComponent } from './templates/guns/guns.component';
import { HomeComponent } from './templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssaultRiffleComponent } from './guns-components/assault-riffle/assault-riffle.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'guns', component: GunsComponent},
  {path: 'guns/assault-riffles', component: AssaultRiffleComponent},
  {path: 'guns/smgs', component: SmgsComponent},
  {path: 'guns/shotguns', component: ShotgunComponent},
  {path: 'guns/lmgs', component: LmgsComponent},
  {path: 'guns/marksman-riffles', component: MarksmanComponent},
  {path: 'guns/sniper-riffles', component: SniperComponent},
  {path: 'guns/handguns', component: HandgunComponent},
  {path: 'guns/launchers', component: RpgsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

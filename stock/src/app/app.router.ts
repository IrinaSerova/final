import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { FiveyearsComponent } from './fiveyears/fiveyears.component';
import { ThreemonthsComponent } from './threemonths/threemonths.component';
import { SixmonthsComponent } from './sixmonths/sixmonths.component';
import { YearComponent } from './year/year.component';
import { MaxComponent } from './max/max.component';



export const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'main', component: MainComponent },
  { path: 'day', component: DayComponent },
  { path: 'week', component: WeekComponent },
  { path: 'threemonths', component: ThreemonthsComponent },
  { path: 'sixmonths', component: SixmonthsComponent },
  { path: 'year', component: YearComponent },
  { path: 'fiveyears', component: FiveyearsComponent },
  { path: 'max', component: MaxComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

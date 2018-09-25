import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ClarityModule , ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { ThreemonthsComponent } from './threemonths/threemonths.component';
import { SixmonthsComponent } from './sixmonths/sixmonths.component';
import { YearComponent } from './year/year.component';
import { FiveyearsComponent } from './fiveyears/fiveyears.component';
import { MaxComponent } from './max/max.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { routes } from './app.router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
// import { AppUserService} from './app-user.service';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent,
    ThreemonthsComponent,
    SixmonthsComponent,
    YearComponent,
    FiveyearsComponent,
    MaxComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    routes,
    HttpClientModule,
    ChartsModule,
    ClrFormsNextModule 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

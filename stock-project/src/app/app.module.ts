import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { ClarityModule , ClrFormsNextModule } from '@clr/angular';

import { AppComponent } from './app.component';

import { routes } from './app.router';
import { ApiService } from './api.service';

import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { ThreemonthsComponent } from './threemonths/threemonths.component';
import { SixmonthsComponent } from './sixmonths/sixmonths.component';
import { YearComponent } from './year/year.component';
import { FiveyearsComponent } from './fiveyears/fiveyears.component';
import { MaxComponent } from './max/max.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




import { AppUserService} from './app-user.service';

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
    MainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    routes,
    HttpClientModule,
    ChartsModule,
    ClrFormsNextModule ,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [ApiService, AppUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

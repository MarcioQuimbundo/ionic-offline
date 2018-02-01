import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Http,
  HttpModule,
  XHRBackend,
  RequestOptions
} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../components/components.module';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPage } from '../pages/tabs/tabs.page';
import { OnboardingPageModule } from '../pages/onboarding/onboarding.module';
import { NavService } from './nav/nav.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        HomePageModule,
        OnboardingPageModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentsModule,
        HomePageModule,
        OnboardingPageModule
    ],
    entryComponents: [
        TabsPage
    ],
    declarations: [

    ],
    providers: [
        NavService
    ],
})
export class CoreModule { }

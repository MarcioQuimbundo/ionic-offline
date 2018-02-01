import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoreModule } from '../core/core.module';
import { TabsPage } from '../pages/tabs/tabs.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        MyApp,
        TabsPage
    ],
    imports: [
        CoreModule,
        SharedModule,
        ComponentsModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
      ],
    providers: [SplashScreen],
})
export class AppModule {
}

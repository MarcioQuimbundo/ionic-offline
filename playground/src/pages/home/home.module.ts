import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        IonicPageModule.forChild(HomePage)
    ],
    exports: [
        HomePage
    ],
    declarations: [
        HomePage
    ],
    providers: [],
})
export class HomePageModule { }

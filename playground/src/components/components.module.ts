
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from 'ionic-angular';
import { OptionsPopover } from './options-popover/options-popover.component';

@NgModule({
    imports: [
        SharedModule,
        IonicModule
    ],
    exports: [
        SidebarComponent,
        OptionsPopover
    ],
    declarations: [
        SidebarComponent,
        OptionsPopover
    ],
    entryComponents: [
        SidebarComponent,
        OptionsPopover
    ],
    providers: [],
})
export class ComponentsModule { }

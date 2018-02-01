import { Component } from '@angular/core';
import filter from 'lodash-es/filter';
import { OptionsPopover } from '../../components/options-popover/options-popover.component';
import { PopoverController } from 'ionic-angular';

@Component({
    selector: 'as-page-home',
    templateUrl: 'home.page.html',
})
export class HomePage {
    public user: any = 'Barney';

    constructor(
        public popoverCtrl: PopoverController
    ) {

    }
    public openOptions(ev: any) {
        const popover = this.popoverCtrl.create(OptionsPopover);
        popover.present({
            ev
        });
    }

}

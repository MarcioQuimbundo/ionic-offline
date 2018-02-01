import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: './options-popover.component.html'
})
export class OptionsPopover {
  constructor(public viewCtrl: ViewController) {}

  public close() {
    this.viewCtrl.dismiss();
  }
}

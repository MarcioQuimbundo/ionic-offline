import { Component } from '@angular/core';

import { HomePage } from '../home/home.page';

@Component({
    templateUrl: 'tabs.page.html',
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    public tab1Root: any = HomePage;

    constructor() { //
    }
}

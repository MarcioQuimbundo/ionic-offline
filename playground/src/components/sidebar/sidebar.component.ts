import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavService } from '../../core/nav/nav.service';
import { Navs } from '../../core/nav/nav';

/**
 * Generated class for the SidebarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'as-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {
    public content: any;
    public navList: Navs[];
    @ViewChild(Nav) public nav: Nav;
    public photo: string = 'assets/img/empty_avatar.jpg';
    constructor(
        public navService: NavService,
    ) {
        this.getNavs();
    }
    /**
     * getNavs
     */
    public getNavs() {
        this.navService.getNavs()
        .then((res) => {
            this.navList = res;
        });
    }

}

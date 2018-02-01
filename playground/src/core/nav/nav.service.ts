import { Injectable } from '@angular/core';
import { Navs } from './nav';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavService {
    public navList: any[];
    public tabsConfirmedSrc = new Subject<boolean>();
    public tabsConfirmedS$ = this.tabsConfirmedSrc.asObservable();
    constructor(private http: Http) {
        this.navList = [
            {
                _id: '1',
                title: 'Home',
                slugName: 'dashboard',
                icon: 'home',
                open: false,
                sub: false
            }
        ];
    }
    public getNavs(): Promise<Navs[]> {
        return Promise.resolve(this.navList);
    }
    public announceTabs(exist: boolean) {
        this.tabsConfirmedSrc.next(exist);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}

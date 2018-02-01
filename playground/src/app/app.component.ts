import {
    Component,
    ViewChild
} from '@angular/core';
import {
    Nav,
    Platform,
    NavController
} from 'ionic-angular';
import {
    SplashScreen
} from '@ionic-native/splash-screen';
import {
    Push,
    PushObject,
    PushOptions
} from '@ionic-native/push';
import {
    TranslateService
} from '@ngx-translate/core';
import { Storage } from '@ionic/Storage';

import { OnboardingPage } from '../pages/onboarding/onboarding';
import { TabsPage } from '../pages/tabs/tabs.page';
/* import { AuthService } from './core/auth/auth.service'; */

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    public content: any;
    public photo: string = 'assets/img/empty_avatar.jpg';

/*     public pushOptions: PushOptions = {
        android: {
            icon: 'ic_stat_briver_notification',
            iconColor: 'red',
            sound: true,
            vibrate: true
        },
        ios: {
            alert: 'true',
            badge: true,
            sound: 'false'
        },
        windows: {},
        browser: {
            pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
    }; */
    public rootPage: any;
    public pages: Array < {
        title: string,
        component: any
    } > ;

    constructor(
        public platform: Platform,
        public translate: TranslateService,
        public splashScreen: SplashScreen,
        public storage: Storage
        /* private fcm: FCM */
    ) {
        this.initializeApp();

        translate.addLangs(['en', 'es']);
        translate.setDefaultLang('en');
        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    }

    public initializeApp() {

        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // StatusBar.styleDefault();
            // tslint:disable-next-line:no-debugger
            this.pushSetup();
           /*  this.fcmSetup(); */
            this.splashScreen.hide();
            this.storage.get('onboarding').then((result: any) => {

            if (result) {
                this.rootPage = TabsPage;
            } else {
                this.rootPage = OnboardingPage;
            }
            });
        });
    }
    public pushSetup() {
        /* if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
          }
        this.push.hasPermission()
        .then((res: any) => {
          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }
        });
        const pushObject: PushObject = this.push.init(this.pushOptions);
        pushObject.on('notification')
        .subscribe((notification: any) => console.log('Received a notification', notification));
        pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
        pushObject.on('error').subscribe((error: any) => console.error('Error with Push plugin', error)); */
    }
    public logout() {
       /*  this.authService.logout(); */
    }
    /* public fcmSetup() {
        this.fcm.onNotification().subscribe((data) => {
            if (data.wasTapped) {
                console.log('Received in background');
            } else {
                console.log('Received in foreground');
            }
        });
    } */
}

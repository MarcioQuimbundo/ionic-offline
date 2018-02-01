
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Slide } from './slide';
import { TranslateService } from '@ngx-translate/core';
import { Translation } from '../../shared/translation';
import { TabsPage } from '../tabs/tabs.page';
import { Storage } from '@ionic/Storage/dist/storage';
/**
 * Generated class for the OnboardingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'as-page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
    @ViewChild(Slides) public slides: Slides;
    public onboardingSlides: Slide[] = [];
    public translations: Translation[];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public translate: TranslateService,
      public storage: Storage
    ) {
        translate.get(
            ['ONBOARDING_TITLE_1',
            'ONBOARDING_MSG_1',
            'ONBOARDING_TITLE_2',
            'ONBOARDING_MSG_2',
            'ONBOARDING_TITLE_3',
            'ONBOARDING_MSG_3'
        ]
            ).subscribe((arr) => {
                this.translations = arr;
                this.onboardingSlides = [
                    new Slide(
                        'assets/svg/logo.svg',
                        null,
                        null
                        /* this.translations['ONBOARDING_TITLE_1'], */
                        // tslint:disable-next-line:max-line-length
                        /* this.translations['ONBOARDING_MSG_1'] */
                    ),
                    new Slide(
                        'assets/svg/logo.svg',
                        null,
                        null
                        /* this.translations['ONBOARDING_TITLE_2'], */
                        // tslint:disable-next-line:max-line-length
                        /* this.translations['ONBOARDING_MSG_2'] */
                    ),
                    new Slide(
                        'assets/svg/logo.svg',
                        null,
                        null
                        /* this.translations['ONBOARDING_TITLE_3'], */
                        // tslint:disable-next-line:max-line-length
                        /* this.translations['ONBOARDING_MSG_3'] */
                    )
                ];
        });
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }
  public skip() {
    this.storage.set('onboarding', true);
    this.navCtrl.setRoot(TabsPage);
  }
  public continue() {
    this.slides.slideNext();
  }

}

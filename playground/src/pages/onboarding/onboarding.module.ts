import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingPage } from './onboarding';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    OnboardingPage,
  ],
  exports: [
    OnboardingPage
  ],
  entryComponents: [
    OnboardingPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(OnboardingPage),
  ],
})
export class OnboardingPageModule {}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonQueueService } from './queue.service';

export * from './queue.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [
  ]
})
export class IonicOfflineModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicOfflineModule,
      providers: [IonQueueService]
    };
  }
}

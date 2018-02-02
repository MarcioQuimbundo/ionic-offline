import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Network } from '@ionic-native/network';

@Injectable()
export class IonQueueService {

  public connected = true;
  public onDisconnect: Observable<any>;
  public onConnect: Observable<any>;
  constructor(private network: Network) {}
  public init() {
      this.onDisconnect = this.network.onDisconnect();
      this.onDisconnect.subscribe(() => {
          console.log('network was disconnected :-(');
          this.connected = false;
      });
      this.onConnect = this.network.onConnect();
      this.network.onConnect().subscribe(() => {
          console.log('network connected!');
          this.connected = true;
          // We just got a connection but we need to wait briefly
           // before we determine the connection type. Might need to wait.
          // prior to doing any api requests as well.
          setTimeout(() => {
            if (this.network.type === 'wifi') {
              console.log('we got a wifi connection, woohoo!');
            }
          }, 3000);
      });
  }
  public iAmConnected() {
      return this.connected;
  }
}

import { Component } from '@angular/core';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationEvents, BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private backgroundGeolocation: BackgroundGeolocation) {

    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

    this.backgroundGeolocation.configure(config)
      .then(() => {

        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location)
          .subscribe((location: BackgroundGeolocationResponse) => {
            console.log(location);

            // this.backgroundGeolocation.finish(); // FOR IOS ONLY
          });

      });

  }

  start() {
    this.backgroundGeolocation.start();
    console.log('inicicando trackeo');

  }

  end() {
    this.backgroundGeolocation.stop();
    console.log('stop trackeo');

  }


}

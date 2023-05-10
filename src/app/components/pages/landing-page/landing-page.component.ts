import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(public app: AppComponent) {}

  handleAvatarImgLoad() {
    this.app.pageInitialized$.next(true);
  }
}

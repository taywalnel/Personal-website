import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(
    public app: AppComponent,
    public currentPageService: CurrentPageService
  ) {}

  handleAvatarImgLoad() {
    this.app.appInitialized$.next(true);
  }
}

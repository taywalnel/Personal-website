import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PagePosition {
  page: string;
  top: number;
  bottom: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appInitialized$ = new BehaviorSubject<boolean>(false);
}

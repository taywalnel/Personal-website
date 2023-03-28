import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  hamburgerMenuOpen = false;
  currentPage = '';

  constructor(
    private viewportScroller: ViewportScroller,
    private app: AppComponent
  ) {}

  ngOnInit() {
    this.viewportScroller.setOffset([0, 70]);
    this.app.currentPage$.subscribe((currentPage) => {
      this.currentPage = currentPage;
    });
  }

  linkClickHandler(page: string, isMobile = false) {
    this.currentPage = page;
    this.viewportScroller.scrollToAnchor(page);

    if (isMobile) {
      this.hamburgerMenuOpen = false;
    }
  }

  hamburgerClickHandler() {
    this.hamburgerMenuOpen = !this.hamburgerMenuOpen;
  }
}

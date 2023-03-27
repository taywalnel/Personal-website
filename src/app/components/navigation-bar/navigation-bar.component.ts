import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  hamburgerMenuOpen = false;
  currentPage = 'landing-page';

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.setOffset([0, 70]);
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

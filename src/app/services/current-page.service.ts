import { Injectable } from '@angular/core';
import {
  distinctUntilChanged,
  fromEvent,
  Observable,
  of,
  switchMap,
  throttleTime,
} from 'rxjs';

interface PagePosition {
  page: string;
  top: number;
  bottom: number;
}

@Injectable({
  providedIn: 'root',
})
export class CurrentPageService {
  private scrollEvent$ = fromEvent(document, 'scroll');
  public currentPage$ = this.scrollEvent$.pipe(
    throttleTime(200),
    switchMap(() => this.getCurrentPage()),
    distinctUntilChanged()
  );

  private getCurrentPage(): Observable<string> {
    const centerOfViewport = window.innerHeight / 2;
    const pagePositions: PagePosition[] = CurrentPageService.getPagePositions();
    const pageClosestToCenterOfViewport =
      CurrentPageService.getPageClosestToCenterOfViewport(
        centerOfViewport,
        pagePositions
      );
    return of(pageClosestToCenterOfViewport);
  }

  private static getPagePositions(): PagePosition[] {
    const pageElements = document.querySelectorAll('.page-wrapper');
    return Array.from(pageElements).map((pageElement) => ({
      page: pageElement.id,
      top: pageElement.getBoundingClientRect().top,
      bottom: pageElement.getBoundingClientRect().bottom,
    }));
  }

  private static getPageClosestToCenterOfViewport(
    centerOfViewport: number,
    pagePositions: PagePosition[]
  ): string {
    const pageClosestToCenter = pagePositions.reduce((prev, curr) => {
      return CurrentPageService.getPageCloserToCenterOfViewport(
        prev,
        curr,
        centerOfViewport
      );
    });
    return pageClosestToCenter.page;
  }

  private static getPageCloserToCenterOfViewport(
    page1: PagePosition,
    page2: PagePosition,
    centerOfViewport: number
  ): PagePosition {
    const page1ValueOfClosestSideToCenter =
      CurrentPageService.getValueClosestToValue(
        page1.top,
        page1.bottom,
        centerOfViewport
      );
    const page2ValueOfClosestSideToCenter =
      CurrentPageService.getValueClosestToValue(
        page2.top,
        page2.bottom,
        centerOfViewport
      );

    const closestPageValue = this.getValueClosestToValue(
      page1ValueOfClosestSideToCenter,
      page2ValueOfClosestSideToCenter,
      centerOfViewport
    );
    const pageCloserToCenterOfViewport =
      page1ValueOfClosestSideToCenter === closestPageValue ? page1 : page2;
    return pageCloserToCenterOfViewport;
  }

  private static getValueClosestToValue(
    value1: number,
    value2: number,
    valueToCompareTo: number
  ): number {
    const value1Distance = Math.abs(value1 - valueToCompareTo);
    const value2Distance = Math.abs(value2 - valueToCompareTo);
    return value1Distance < value2Distance ? value1 : value2;
  }
}

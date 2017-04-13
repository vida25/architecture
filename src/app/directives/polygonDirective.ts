import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[polygonDirective]',
  host: { }
})
export class PolygonDirective implements AfterViewInit {
  private el:HTMLElement;
  private browserDomAdapter: any;

  @Input('polygonDirective') points: string;

  constructor( el: ElementRef ) {
    this.el = el.nativeElement;
  }
  ngAfterViewInit() {
    this.polygonMaker();
  }
  private polygonMaker() {
    this.el.innerHTML = `<polygon points="${this.points}"></polygon>`;
  }
}
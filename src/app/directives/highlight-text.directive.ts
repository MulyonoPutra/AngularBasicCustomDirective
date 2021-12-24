import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.color = 'red';
  }
}

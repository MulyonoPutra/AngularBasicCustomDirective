import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostBinding]',
})
export class HostBindingDirective implements OnInit {

  @HostBinding('style.color') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit(): void {
   
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    this.color = 'red';
  }
}

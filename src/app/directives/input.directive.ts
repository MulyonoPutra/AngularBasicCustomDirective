import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class InputDirective implements OnInit {
  @Input() highlightColor: string;
  @Input() defaultColor: string;
  @HostBinding('style.color') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.color = this.defaultColor;
  }
}

import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

/// Renderer2 to create the custom attribute directive to maipulate DOM in Angular

@Directive({
  selector: '[appRendererHighlight]',
})
export class RendererHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  onChangeColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'green');
  }

  /// When hover element will change color to green
  @HostListener('mouseenter') onmouseover(event: Event) {
    // this.color = 'red'; // => HostBinding
    this.renderer.setStyle(this.element.nativeElement, 'color', 'green');
  }

  /// When mouseleave, element will change color to green
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');
  }

  /// When click element will change color to green
  @HostListener('click') onmouseclick(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }
}

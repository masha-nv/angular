import { Directive, ElementRef, OnInit, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') appTooltipText: string = '';
  tooltip!: HTMLElement | null;

  @Input() delay!: number

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.tooltip) return;
    this.create()
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    setTimeout(() => this.remove() , this.delay)
    
  }

  create() {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.setStyle(this.tooltip, 'border', '1px solid #ccc');
    this.renderer.setStyle(this.tooltip, 'display', 'inline-block');
    this.renderer.setStyle(this.tooltip, 'padding', '5px')
    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.appTooltipText))
    this.renderer.appendChild(this.el.nativeElement.parentElement, this.tooltip);
    
  }

  remove() {
    if (!this.tooltip) return;
    this.renderer.removeChild(this.el.nativeElement.parentElement, this.tooltip)
    this.tooltip = null;
  }

}

import { Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  constructor(private ele:ElementRef) { }
ngOnInit(): void {
  this.ele.nativeElement.style.backgroundColor="pink";
  this.ele.nativeElement.style.fontSize="30px";
}
}

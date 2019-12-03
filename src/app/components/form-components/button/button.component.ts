import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonCaption: string;
  @Input() isDisabled: boolean;
  @Input() isHidden: boolean;
  @Input() class: string;
  @ViewChild('loginInput', { static: false }) loginInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
}

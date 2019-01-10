import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() icon: string;
  @Input() inputType: string;
  @Input() class: string;
  @Output() inputEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  emitInputEvent(event) {
    this.inputEvent.emit(event);
  }
}

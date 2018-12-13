import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-error-server-component',
  templateUrl: './error-server-component.component.html',
  styleUrls: ['./error-server-component.component.scss']
})
export class ErrorServerComponentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('body')[0].classList.add('error');
  }

  ngOnDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('error');
  }
}

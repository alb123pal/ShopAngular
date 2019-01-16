import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-error-page-component',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    document.getElementsByTagName('body')[0].classList.add('error');
  }

  ngOnDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('error');
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-stars',
  templateUrl: './panel-stars.component.html',
  styleUrls: ['./panel-stars.component.scss']
})
export class PanelStarsComponent implements OnInit {
  @Input() activeStar: number;
  @Input() inactiveStar: number;

  constructor() { }

  ngOnInit() {
  }

}

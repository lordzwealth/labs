import { Component, OnInit } from '@angular/core';
import {Settings} from '../../services/settings.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(public settings: Settings) { }

  ngOnInit() {
  }

}

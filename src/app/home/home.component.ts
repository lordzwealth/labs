import { Component, OnInit } from '@angular/core';
import { Settings } from '../shared/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public settings: Settings) { }

  ngOnInit() {
  }

}

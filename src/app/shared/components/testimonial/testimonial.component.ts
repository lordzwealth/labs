import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Settings } from '../../services/settings.service';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public settings: Settings) { }

  ngOnInit() {

  }

}

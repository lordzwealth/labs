import { Component, OnInit } from '@angular/core';
import { Settings } from '../shared/services/settings.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public settings: Settings) { }

  ngOnInit() {
  }

}

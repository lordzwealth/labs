import { Component, OnInit } from '@angular/core';
import {Settings} from '../../services/settings.service';

@Component({
  selector: 'app-gallery-items',
  templateUrl: './gallery-items.component.html',
  styleUrls: ['./gallery-items.component.css']
})
export class GalleryItemsComponent implements OnInit {

  constructor(public settings: Settings) { }

  ngOnInit() {
  }

}

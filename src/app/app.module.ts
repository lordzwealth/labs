import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './shared/modules/core.module';
import { OwlModule } from 'ngx-owl-carousel';


import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { GalleryItemsComponent } from './shared/components/gallery-items/gallery-items.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import {SanitizeHtmlPipe} from './shared/pipes/sanitize-html.pipe';

import { SanitizeUrlPipe } from './shared/pipes/sanitize-url.pipe';
import { SanitizeResourceUrlPipe } from './shared/pipes/sanitize-resource-url.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SanitizeHtmlPipe,
    SanitizeUrlPipe,
    SanitizeResourceUrlPipe,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    GalleryItemsComponent,
    ServiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    OwlModule
  ],
  providers: [SanitizeHtmlPipe, SanitizeUrlPipe, SanitizeResourceUrlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

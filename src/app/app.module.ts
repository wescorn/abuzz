import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagecontentComponent } from './components/pagecontent/pagecontent.component';
import { InfoTrioComponent } from './components/info-trio/info-trio.component';
import { LightboxGalleryComponent } from './components/lightbox-gallery/lightbox-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagecontentComponent,
    InfoTrioComponent,
    LightboxGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

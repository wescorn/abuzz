import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox-gallery.component.html',
  styleUrls: ['./lightbox-gallery.component.css']
})
export class LightboxGalleryComponent implements OnInit {

imgfolder = "http://airbuzz.dk/resources/gallery/";


images = [
"0.jpg",
"1.jpg", 
"2.jpg", 
"3.jpg", 
"4.jpg", 
"5.jpg", 
"6.jpg", 
"7.jpg",
"8.jpg"];

imageIndex = 1;
  constructor() {
    
   }

  ngOnInit() {
    
  }



}

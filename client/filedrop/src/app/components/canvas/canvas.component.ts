import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvasEditor') myCanvas!: ElementRef;
  @ViewChild('sampleImg') myImg!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.#processImage();
  }

  #processImage() {
    const img: HTMLImageElement = this.myImg.nativeElement;
    img.onload = () => {
      const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = 1024;
        canvas.height = 768;

        context.imageSmoothingEnabled = false;
        context.drawImage(img, 0, 0, img.width, img.height);
        // context.drawImage(img, 0, 0, img.width, img.height, // source size
        //              0, 0, canvas.width, newHeight);  // destination size

        // @TODO - dynamically compute artwork coords based on the print selection area value
        // @TODO - add bg garment
      }
    };
  }
}

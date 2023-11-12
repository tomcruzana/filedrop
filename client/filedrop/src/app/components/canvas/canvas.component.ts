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
        context.drawImage(img, 110, 110, 51, 51);
        // context.drawImage(img, 0, 0, img.width, img.height, // source size
        //              0, 0, canvas.width, newHeight);  // destination size
      }
    };
  }
}

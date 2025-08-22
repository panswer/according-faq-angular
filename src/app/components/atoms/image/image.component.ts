import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input({ required: true }) imgStr: string = "";
  @Input({ required: false }) imgAlt: string = "";
}

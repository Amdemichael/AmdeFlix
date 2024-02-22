import { Component, Input } from '@angular/core';
import { imageBaseUrl } from 'src/app/constants/images-size';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;
  imageBaseUrl = imageBaseUrl;
}

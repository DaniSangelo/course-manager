import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  //faz com que a variável esteja habilitada para receber dados de outro componente
  //nesse caso, rating será um atributo do selector app-star
  @Input()
  rating: number = 0;

  starWidth: number = 0;

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}

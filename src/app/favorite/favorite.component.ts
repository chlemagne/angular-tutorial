import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  fontSize = "font-size: 6rem;";
  @Input("isFavorite") isSelected: boolean;

  constructor() {
    this.isSelected = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    console.log(this.isSelected);
  }
}

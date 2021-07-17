import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  fontSize = "font-size: 6rem;";
  @Input("isFavorite") isSelected: boolean;
  @Output("changed") clickEvent = new EventEmitter();

  constructor() {
    this.isSelected = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;

    const args: FavoriteChangeEventArgs = {
      newValue: this.isSelected
    };
    this.clickEvent.emit(args);
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}

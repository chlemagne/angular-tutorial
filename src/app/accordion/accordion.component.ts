import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input("title") title: string = "";
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

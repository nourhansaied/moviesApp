import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[mesage]',
  templateUrl: './display-mesage.component.html',
  styleUrls: ['./display-mesage.component.scss']
})
export class DisplayMesageComponent implements OnInit {
  updatedMessage: string=''
  @Input() message;
  @Output() updateText = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.updateText.emit(this.updatedMessage)
  }
}

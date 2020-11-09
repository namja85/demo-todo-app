import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() title: string;
  @Input() template: string;
  @Input() placeholder: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }

  ngOnInit(): void {
  }

  emitValue(value) {
    this.valueEmitted.emit(value);
  }
}

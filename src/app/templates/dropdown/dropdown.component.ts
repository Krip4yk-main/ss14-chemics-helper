import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CoreEmpty} from "../../core/core.empty";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> implements OnInit {
  @Input('data') data: Array<T> = [];
  @Input('dataLabel') dataLabel: keyof T | undefined = undefined;
  @Input('placeholder') placeholder: string = 'Select category';

  @Output('onChange') onChange: EventEmitter<T> = new EventEmitter();

  @ViewChild('dropdown') dropdown: ElementRef | undefined;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.dropdown?.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.isExpanded = false;
    }
  }

  isExpanded: boolean = false;
  selectedItem: T | undefined = undefined;

  constructor(
  ) {
  }

  ngOnInit() {

  }

  expToggle(value?: boolean) {
    if (value !== undefined) {
      this.isExpanded = value;
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }

  select(item: T) {
    this.selectedItem = item;
    this.onChange.emit(item);
    this.expToggle(false);
  }

  protected readonly undefined = undefined;
}

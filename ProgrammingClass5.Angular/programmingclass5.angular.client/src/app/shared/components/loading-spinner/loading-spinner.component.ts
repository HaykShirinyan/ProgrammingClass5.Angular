import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  templateUrl: './loading-spinner.component.html',
  selector: 'loading-spinner',
  styleUrls: [
    './loading-spinner.component.css'
  ]
})
export class LoadingSpinnerComponent {
  @Input()
  public message: string = 'Loading...';

  @Output()
  public cancel: EventEmitter<void> = new EventEmitter();

  public onCancel(): void {
    this.cancel.emit();
  }
}

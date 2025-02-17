import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'del-btn',
  templateUrl: './delete-button.component.html'
})
export class DeleteButtonComponent {
  @Output() public delete: EventEmitter<void> = new EventEmitter<void>();

  public deleteItem(): void {
      this.delete.emit();
  }
}

import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'del-btn',
  templateUrl: './delete-button.component.html'
})
export class DeleteButtonComponent {
  @Output() public delete: EventEmitter<void> = new EventEmitter<void>();

  public deleteItem(): void {
    if (confirm("Do you want to delete this item?")) {
      this.delete.emit();
    }
  }
}

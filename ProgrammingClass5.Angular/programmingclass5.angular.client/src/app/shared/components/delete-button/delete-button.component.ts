import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Output() public delete: EventEmitter<void> = new EventEmitter<void>();

  public confirmDelete(): void {
    if (confirm("Are you sure you want to delete this item?")) {
      this.delete.emit();
    }
  }
}


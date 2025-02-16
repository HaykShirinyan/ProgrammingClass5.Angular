import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Input() isDeleteAll: boolean = false;

  @Output() delete: EventEmitter<void> = new EventEmitter();

  public onDelete(): void {
    if (this.isDeleteAll) {
      if (confirm("Are you sure you want to delete ALL ?")) {
        this.delete.emit();
      }
    } else {
      if (confirm("Are you sure you want to delete?")) {
        this.delete.emit();
      }
    }
  }
}

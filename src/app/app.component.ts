import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'chc-frontend';

  constructor(private messageService: MessageService) { }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Info', detail: 'Message Content', life: 3000 });
  }
}

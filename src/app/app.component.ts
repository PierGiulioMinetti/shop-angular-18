import { Component, computed, signal } from '@angular/core';
import { inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsServiceService } from './services/items-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-18-app';
  name = signal<string>('Giulio');
  fullName = computed(() => this.name() + ' Minetti');
  itemsService = inject(ItemsServiceService);

  printName() {
    return this.fullName();
  }

  ngOnInit() {
    this.itemsService.getItems().subscribe((res) => {
      if (res) {
        console.log('response: ', res);
      }
    });
  }
}

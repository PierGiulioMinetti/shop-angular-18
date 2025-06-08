import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-18-app';
  name = signal<string>('Giulio');
  fullName = computed(()=> this.name() + ' Minetti')

  printName(){
    return this.fullName();
  }
}



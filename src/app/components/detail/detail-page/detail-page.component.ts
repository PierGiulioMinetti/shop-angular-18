import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-detail-page',
  standalone: true,
   imports: [MatCardModule, MatButtonModule],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {
    private route = inject(ActivatedRoute);
  resolveData = this.route.snapshot.data['resolvedData'];


   ngOnInit() {
    console.log('detail component data resolver: ', this.resolveData);

  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [],
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

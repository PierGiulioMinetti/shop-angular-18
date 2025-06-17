import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private route = inject(ActivatedRoute);
  resolveData = this.route.snapshot.data['resolvedData'];
  displayedColumns: string[] = ['Name', 'Category', 'Price', 'Image', 'Action'];
  dataSource = [];

  ngOnInit() {
    this.dataSource = this.resolveData[0];
  }

}

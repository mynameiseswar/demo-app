import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent implements OnInit {

  selectedProduct: any = undefined;

  productKeys: any = [];

  constructor(
    private dashboardService: DashboardService,
    private router: ActivatedRoute,
    private navigationRouter: Router
  ) {

    let id$ = this.router.paramMap.pipe(
      map(
        (params: ParamMap) => params.get('id')
      )
    );
    console.log(id$);
    this.selectedProduct = this.dashboardService.getSelectedProdudt();
    this.productKeys = Object.keys(this.selectedProduct || {});
  }
  ngOnInit(): void {
    if (this.selectedProduct == undefined) {
      this.navigationRouter.navigate(['/app/dashboard/list']);
    }
  }
}

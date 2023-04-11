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
    public dashboardService: DashboardService,
    private router: ActivatedRoute,
    private navigationRouter: Router
  ) {

    this.router.params.subscribe(
      (data: any) =>{
        if(data && data.productId){
       
        const produtId = data.productId || 0;

        this.dashboardService.getProductDetailsById(produtId).subscribe(
          (data) =>{
            console.log(data);
            this.selectedProduct = data;
            this.productKeys = Object.keys(this.selectedProduct || {});

            if (this.selectedProduct == undefined) {
              this.navigationRouter.navigate(['/app/dashboard/list']);
            }
          }
        );
      }
      }
     );
    /* let id$ = this.router.paramMap.pipe(
      map(
        (params: ParamMap) => params.get('id')
      )
    );
    console.log(id$); */

    /* this.selectedProduct = this.dashboardService.getSelectedProdudt();
    console.log(this.selectedProduct);
    this.productKeys = Object.keys(this.selectedProduct || {});
    if (this.selectedProduct == undefined) {
      this.navigationRouter.navigate(['/app/dashboard/list']);
    } */
  }

  
  ngOnInit(): void {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from './../../../services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
    selector : 'app-order-details',
    templateUrl : './order-details.component.html',
    styleUrls : ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
    orderId: string;
    orderInfo = {};
    grandTotal: number;
    public productImage;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private cartService: CartService,
        private spinner: NgxSpinnerService
    ) {
        this.orderId = this.route.snapshot.paramMap.get('orderId');
    }

    ngOnInit() {
        this.getOrderDetails();
    }

    getOrderDetails() {
        this.spinner.show();
        this.cartService.getOrderDetails(this.orderId).subscribe((resp) => {
            this.spinner.hide();
            this.orderInfo = resp;
        },
        (err) => {
            this.spinner.hide();
            console.log(err);
        });
    }

    public openModal(image) {
        if (image.indexOf('/product_placeholder.png') !== -1) {
          image = image.replace('product_placeholder.png', 'coming_soon.jpg');
        }
    
        this.productImage = image;
        $('#productImage').attr('src', image);
        $('#imageDialogModal').modal('show');
    }
}

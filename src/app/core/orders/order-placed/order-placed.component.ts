import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'app-order-placed',
    templateUrl: './order-placed.component.html',
    styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent {
    constructor(private router: Router) {}
    startNewOrder() {
        this.router.navigate(['/products']);
    }
}

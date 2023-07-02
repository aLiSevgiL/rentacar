import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service'; // CustomerService import edildi

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { } // HttpClient yerine CustomerService enjekte edildi

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe((response) => { // customerService kullanıldı
      this.customers = response.data;
    });
  }

}

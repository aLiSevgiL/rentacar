import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service'; // RentalService import edildi

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) { } // HttpClient yerine RentalService enjekte edildi

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(): void {
    this.rentalService.getRentals().subscribe((response) => { // rentalService kullanıldı
      this.rentals = response.data;
    });
  }

}

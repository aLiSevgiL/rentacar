import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carimage';
import { CarImageService } from 'src/app/services/car-image.service'; // CarImageService import edildi

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  
  carImages: CarImage[] = [];
  // İsteğe bağlı olarak bir araç ID belirleyin.
  // Bu ID'ye göre araç resimleri alınır.
  carId: number = 1; 

  constructor(private carImageService: CarImageService) { } // HttpClient yerine CarImageService enjekte edildi

  ngOnInit(): void {
    this.getCarImagesByCar(this.carId);
  }

  getCarImagesByCar(carId: number): void {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => { // carImageService kullanıldı
      this.carImages = response.data;
    });
  }
}

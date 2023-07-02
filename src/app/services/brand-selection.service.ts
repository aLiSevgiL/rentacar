import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandSelectionService {
  private selectedBrandId = new BehaviorSubject<number>(0);
  currentBrandId = this.selectedBrandId.asObservable();

  constructor() { }

  changeBrandId(brandId: number) {
    this.selectedBrandId.next(brandId);
  }
}
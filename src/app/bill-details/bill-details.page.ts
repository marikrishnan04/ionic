import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.page.html',
  styleUrls: ['./bill-details.page.scss'],
})
export class BillDetailsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goaddress(){
    this.router.navigate(['/address'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.page.html',
  styleUrls: ['./editaddress.page.scss'],
})
export class EditaddressPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {

    // this.data=JSON.parse(localStorage.getItem("data"))
    console.log(localStorage.getItem("data"));
  }

  gooaddress(){
    this.router.navigate(['/address'])

  }


}

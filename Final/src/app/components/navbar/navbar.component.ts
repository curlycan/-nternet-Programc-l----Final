import { Component, OnInit } from '@angular/core';
import { FbservisService } from 'src/app/services/fbservis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {uye = this.fbServis.AktifUyeBilgi;

  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OturumKapat() {
    this.fbServis.OturumKapat().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
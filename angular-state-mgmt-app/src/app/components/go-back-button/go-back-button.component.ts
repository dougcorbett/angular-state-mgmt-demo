import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.css']
})
export class GoBackButtonComponent implements OnInit {

  @Input() backRoute:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    console.log("backRoute", this.backRoute);
    this.router.navigate([this.backRoute]);
  }

}

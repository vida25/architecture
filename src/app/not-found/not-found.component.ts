import { Component, OnInit } 						from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  private sub: any;

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => { });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

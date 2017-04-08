import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'house-component',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  section = {
    id: 1
  }
  house = {
    id: 1
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    if( Number.isNaN( +this.id ) || this.id > 1 || this.id < 1)
        this.router.navigate(['/not-found']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
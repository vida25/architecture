import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router }               from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
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
        this.router.navigate(['/prob']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
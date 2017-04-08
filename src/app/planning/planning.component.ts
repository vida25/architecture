import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
  selector: "planning-component",
  templateUrl: "./planning.component.html",
  styleUrls: [ "./planning.component.css" ]
})
export class PlanningComponent {
	houses: House[] = Houses;
  constructor( ) {
  }
}

export const Houses: House[] = [
	{	id: 1 },
	{	id: 2 },
]



export interface House {
	id: number;
}
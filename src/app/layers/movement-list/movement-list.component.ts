import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupType } from 'src/app/data/enums/group-type';
import { MovementService } from 'src/app/data/services/movement.service';
import { Movement } from 'src/app/data/types/movement';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent {
  groupTypeOptions: typeof GroupType = GroupType;

  constructor(
    public router: Router,
    private movementService: MovementService
  ) {}

  movementList: Movement[] = this.movementService.getAllMovements();
  //TODO fix date in html list
  viewMovement(movement: Movement) {
    this.router.navigate(['movements/form'], {
      state: { movement }
    });
  }

  addMovement() {
    this.router.navigate(['movements/form'], {
      state: { movement: undefined }
    });
  }
}

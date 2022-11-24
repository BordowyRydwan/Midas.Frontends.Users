import { Component, OnInit } from '@angular/core';
import ComponentState from "../../../enums/component-state";
import { UserApiService, UserDto } from "../../services/user/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  state = ComponentState.LOADING
  states = ComponentState;

  user?: UserDto;

  constructor(private usersApi: UserApiService) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.usersApi.getActiveUser()
      .subscribe({
        next: response => {
          this.user = response.result;
          this.state = ComponentState.LOADED;
        },
        error: error => {
          console.error(error);
          this.state = ComponentState.ERROR;
        },
      })
  }
}

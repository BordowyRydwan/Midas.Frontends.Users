import { UserUpdateEmailDto } from "../../services/user/user.service";
import { FormGroup } from "@angular/forms";

export class UserUpdateEmailModelConverter {
  public static convertToUpdateModel(formGroup: FormGroup): UserUpdateEmailDto {
    return {
      oldEmail: formGroup.controls['email'].value,
      newEmail: formGroup.controls['newEmail'].value,
    } as UserUpdateEmailDto;
  }
}

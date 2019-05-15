import { AbstractControl } from '@angular/forms';

export function ValidatePatientName(control: AbstractControl) {
    let regExp = new RegExp(/^[A-Z]{3,20}\s[A-Z]{3,20}((\s\w+)?(\s\w+)(\s\w+)?)?$/);
    if (control.value.match(regExp)) {
        return { validPatientName: true };
    }
    return null;
}

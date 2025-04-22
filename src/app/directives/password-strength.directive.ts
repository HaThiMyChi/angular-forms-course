import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";
import { Directive } from "@angular/core";

@Directive({
    selector: "[passwordStrength]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordStrengthDirective,
        multi: true
    }],
    standalone: false
})

export class PasswordStrengthDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return createPasswordStrengthValidator()(control);
    }
}
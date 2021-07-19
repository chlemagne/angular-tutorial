import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SignUpFormValidators {
    static usernameNoSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0) {
            return { "usernameNoSpace": true };
        }

        return null;
    }

    static usernameDuplicate(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // simulate server call
            setTimeout(() => {
                if (control.value === "Charlie") {
                    resolve({ usernameDuplicate: true });
                } else {
                    resolve(null);
                }
            }, 3000);
        });
    }
}
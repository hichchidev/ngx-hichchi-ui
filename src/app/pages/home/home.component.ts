import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-test-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
    testForm: FormGroup;

    loading = false;

    error = false;

    constructor(private readonly fb: FormBuilder) {
        this.testForm = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
        });
    }

    refresh(): void {
        // eslint-disable-next-line no-console
        console.log("refresh");
    }

    submit(): void {
        Object.values(this.testForm.controls).forEach(control => {
            if (control.invalid) {
                control.markAsTouched();
                control.markAsDirty();
            }
        });
    }
}

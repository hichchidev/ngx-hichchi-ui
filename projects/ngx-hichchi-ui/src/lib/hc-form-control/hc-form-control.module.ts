import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./components";
import { HcPipesModule } from "../hc-pipes";
import { FormsModule } from "@angular/forms";
import { ValidationErrorDirective } from "./directives";
import { EmailInputDirective } from "./directives/email.directive";
import { NumberInputDirective } from "./directives/number.directive";
import { PasswordInputDirective } from "./directives/password.directive";
import { TextareaInputDirective } from "./directives/textarea.directive";
import { InputAutocompleteDirective } from "./directives/autocomplete.directive";
import { InputNoValidationDirective } from "./directives/no-validation.directive";
import { DatepickerDirective } from "./directives/datepicker.directive";
import { TimepickerInputDirective } from "./directives/timepicker.directive";
import { DateTimePickerInputDirective } from "./directives/date-time-picker.directive";

@NgModule({
    declarations: [
        InputComponent,
        ValidationErrorDirective,
        EmailInputDirective,
        NumberInputDirective,
        PasswordInputDirective,
        TextareaInputDirective,
        InputAutocompleteDirective,
        InputNoValidationDirective,
        DatepickerDirective,
        TimepickerInputDirective,
        DateTimePickerInputDirective,
    ],
    imports: [CommonModule, HcPipesModule, FormsModule],
    exports: [InputComponent, ValidationErrorDirective],
})
export class HcFormControlModule {}


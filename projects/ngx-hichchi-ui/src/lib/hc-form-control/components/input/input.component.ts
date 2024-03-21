import {
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    Host,
    Input,
    OnInit,
    Optional,
    Output,
    QueryList,
    SkipSelf,
    ViewChild,
} from "@angular/core";
import { AbstractControl, ControlContainer, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from "@angular/forms";
import { CustomFormControl } from "../../custom-form-controll";
import { ValidationErrorDirective } from "../../directives";
import { EmailInputDirective } from "../../directives/email.directive";
import { NumberInputDirective } from "../../directives/number.directive";
import { PasswordInputDirective } from "../../directives/password.directive";
import { TextareaInputDirective } from "../../directives/textarea.directive";
import { InputAutocompleteDirective } from "../../directives/autocomplete.directive";
import { InputNoValidationDirective } from "../../directives/no-validation.directive";
import { DatepickerDirective } from "../../directives/datepicker.directive";
import { TimepickerInputDirective } from "../../directives/timepicker.directive";
import { DateTimePickerInputDirective } from "../../directives/date-time-picker.directive";

@Component({
    selector: "hc-input",
    templateUrl: "./input.component.html",
    styleUrls: ["../form-control.scss", "./input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            // eslint-disable-next-line no-use-before-define
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: forwardRef(() => InputComponent),
        },
    ],
})
export class InputComponent extends CustomFormControl<Date | string> implements OnInit, AfterViewInit {
    @Input() label?: string;

    @Input() description?: string;

    @Input() size?: "sm" | "md" | "lg" = "md";

    @Input() formControlName?: string;

    @Input() name?: string;

    @Input() readonly?: boolean;

    @Input() styleClass?: string;

    @Input() inputClass?: string;

    @Input() disabled = false;

    @Input() icon?: string;

    @Input() rightText?: string;

    @Input() max?: number;

    @Input() min?: number;

    @Output() valueChange: EventEmitter<Date | string | null> = new EventEmitter<Date | string | null>();

    @ViewChild("input") inputRef!: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

    @ContentChild(EmailInputDirective) hcEmail?: EmailInputDirective;

    @ContentChild(NumberInputDirective) hcNumber?: NumberInputDirective;

    @ContentChild(PasswordInputDirective) hcPassword?: PasswordInputDirective;

    @ContentChild(TextareaInputDirective) hcTextarea?: TextareaInputDirective;

    @ContentChild(DatepickerDirective) hcDatepicker?: DatepickerDirective;

    @ContentChild(TimepickerInputDirective) hcTimepicker?: TimepickerInputDirective;

    @ContentChild(DateTimePickerInputDirective) hcDateTimePicker?: DateTimePickerInputDirective;

    @ContentChild(InputAutocompleteDirective) hcAutoComplete?: InputAutocompleteDirective;

    @ContentChild(InputNoValidationDirective) hcNoValidation?: InputNoValidationDirective;

    @ContentChildren(ValidationErrorDirective) errors?: QueryList<ValidationErrorDirective>;

    constructor(
        @Optional()
        @Host()
        @SkipSelf()
        protected override controlContainer?: ControlContainer,
    ) {
        super(controlContainer);
    }

    ngOnInit(): void {
        this.init();
    }

    ngAfterViewInit(): void {
        if (this.hcTextarea !== undefined) {
            setTimeout(() => this.autoResizeTextArea());
        }
    }

    override onValidation(_control: AbstractControl): ValidationErrors | null {
        return !this.required || this.value ? null : { required: true };
    }

    getType(): string {
        if (this.hcEmail) {
            return "text";
        } else if (this.hcNumber) {
            return "number";
        } else if (this.hcPassword) {
            return "password";
        }
        return "text";
    }

    autoResizeTextArea(): void {
        const textarea = this.inputRef.nativeElement as HTMLTextAreaElement;
        textarea.style.height = "auto";
        if (this.value !== "") {
            textarea.style.height = `${textarea.scrollHeight + 2}px`;
        }
    }

    hasErrorFor(type: string): boolean {
        return Boolean(this.errors?.find(error => error.hcValidationError === type));
    }

    override ifError(error: string): boolean {
        return this.control?.touched && this.control?.dirty && this.isInvalid() && this.control?.errors?.[error];
    }
}

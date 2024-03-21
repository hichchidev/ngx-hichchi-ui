import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: "[hcValidationError]",
})
export class ValidationErrorDirective {
    @Input() hcValidationError?: string;

    constructor(public templateRef: TemplateRef<unknown>) {}
}

import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: "[hcSectionHeading]",
})
export class SectionHeadingDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}

import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: "[hcHeaderLogo]",
})
export class HeaderLogoDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}


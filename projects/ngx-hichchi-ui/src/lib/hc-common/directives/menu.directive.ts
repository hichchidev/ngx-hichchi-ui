import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: "[hcMenu]",
})
export class MenuDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}

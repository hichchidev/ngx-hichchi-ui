import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: "[hcMenuItem]",
})
export class MenuItemDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}

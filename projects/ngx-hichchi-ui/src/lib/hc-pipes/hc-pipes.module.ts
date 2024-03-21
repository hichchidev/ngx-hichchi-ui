import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstCasePipe, SafePipe, TitleCasePipe } from "./pipes";

@NgModule({
    declarations: [SafePipe, TitleCasePipe, FirstCasePipe],
    imports: [CommonModule],
    exports: [SafePipe, TitleCasePipe, FirstCasePipe],
})
export class HcPipesModule {}

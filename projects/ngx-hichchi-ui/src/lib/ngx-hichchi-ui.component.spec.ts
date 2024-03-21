import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxHichchiUiComponent } from "./ngx-hichchi-ui.component";

describe("NgxHichchiUiComponent", () => {
    let component: NgxHichchiUiComponent;
    let fixture: ComponentFixture<NgxHichchiUiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxHichchiUiComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NgxHichchiUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

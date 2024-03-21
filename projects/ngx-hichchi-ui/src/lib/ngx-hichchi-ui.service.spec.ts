import { TestBed } from "@angular/core/testing";

import { NgxHichchiUiService } from "./ngx-hichchi-ui.service";

describe("NgxHichchiUiService", () => {
    let service: NgxHichchiUiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxHichchiUiService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});

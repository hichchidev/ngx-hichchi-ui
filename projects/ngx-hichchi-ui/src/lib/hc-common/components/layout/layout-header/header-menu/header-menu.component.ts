import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, Renderer2, ViewChild } from "@angular/core";
import { MenuItem, MenuOptions } from "../../../../interfaces";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: "hc-header-menu",
    templateUrl: "./header-menu.component.html",
    styleUrls: ["./header-menu.component.scss"],
})
export class HeaderMenuComponent implements AfterViewInit {
    /**
     * The menu options of the header
     */
    @Input() menu?: MenuOptions;

    @ViewChild("menuRef", { read: ElementRef }) menuRef?: ElementRef<HTMLDivElement>;

    @HostListener("document:click", ["$event"])
    onClick(e: MouseEvent): void {
        if (
            this.opened &&
            !(e.target as HTMLElement).closest("hc-header-menu") &&
            !(e.target as HTMLElement).closest(".header-menu-container")
        ) {
            this.toggleMenu(true);
        }
    }

    opened: boolean = false;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private el: ElementRef<HTMLElement>,
    ) {}

    ngAfterViewInit(): void {
        this.menuRef?.nativeElement.remove();
    }

    toggleMenu(close?: boolean): void {
        if (this.menuRef) {
            if (this.opened || close) {
                this.renderer.removeChild(this.document.body, this.menuRef.nativeElement);
            } else {
                const el = this.menuRef.nativeElement;
                const right = this.document.body.offsetWidth - this.el.nativeElement.getBoundingClientRect().right;
                const top = (this.el.nativeElement.closest("hc-layout-header")?.clientHeight ?? 0) - 5;
                el.style.right = `${right}px`;
                el.style.top = `${top}px`;
                this.renderer.appendChild(this.document.body, el);
            }
        }
        this.opened = !this.opened;
    }

    action(item: MenuItem, e: MouseEvent): void {
        this.toggleMenu(true);
        item.action?.(e);
    }
}

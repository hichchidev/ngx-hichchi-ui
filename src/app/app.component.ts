import { Component } from "@angular/core";
import { MenuItem, MenuOptions } from "ngx-hichchi-ui";
import { NavigationEnd, Router } from "@angular/router";

export enum AppMenu {
    HOME = "home",
    CONTACT = "contact",
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    menuItems: MenuItem<AppMenu>[] = [
        {
            key: AppMenu.HOME,
            label: "Home",
            icon: "bi bi-mortarboard",
            routerLink: "/home",
        },
        {
            key: AppMenu.CONTACT,
            label: "Contact",
            icon: "bi bi-search",
            routerLink: "/contact",
        },
    ];

    headerMenu: MenuOptions = {
        items: [...this.menuItems, { separator: true }, ...this.menuItems],
        image: "assets/images/avatar.jpg",
    };

    activeIndex = 0;

    constructor(private readonly router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const index = this.menuItems.findIndex(item => event.url.includes(item.routerLink as string));
                if (index) this.activeIndex = index >= 0 ? index : 0;
            }
        });
    }
}

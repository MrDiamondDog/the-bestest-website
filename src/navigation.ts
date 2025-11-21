import { Elements } from "./elements";

export const navigation: Record<string, string> = {
    profile: "/#",
    projects: "/#projects",
    blog: "/#blog",
}

export let currentPage = "";

export function initNavigation() {
    window.addEventListener("hashchange", updateNavigation);

    for (const key in navigation) {
        const a = document.createElement("a");

        a.innerText = key;
        a.href = navigation[key];

        Elements.navigation.appendChild(a);
    }

    updateNavigation();
}

export function updateNavigation() {
    const hash = location.hash.slice(1);

    currentPage = Object.keys(navigation).find(k => k === hash) || "profile";

    for (const page of Object.values(Elements.main.pages)) {
        page.style = "display: none;";

        if (page.id === `${currentPage}-page`)
            page.style = "display: block;";
    }

    Elements.main.label.innerText = currentPage;
}
export const Elements = {
    navigation: document.querySelector<HTMLFieldSetElement>("#navigation")!,

    main: {
        label: document.querySelector<HTMLLegendElement>("#main-window-label")!,
        pages: {
            profile: document.querySelector<HTMLDivElement>("#profile-page")!,
            projects: document.querySelector<HTMLDivElement>("#projects-page")!,
            blog: document.querySelector<HTMLDivElement>("#blog-page")!,
        }
    },
}
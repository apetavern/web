export class ParallaxBackground {
    bgElement = null;

    constructor(selector: any) {
        this.bgElement = document.querySelector(selector);

        if (this.bgElement == null)
            return;

        document.addEventListener("scroll", (e) => {
            this.Update(this.bgElement);
        });
    }

    Update(bgElement: any) {
        if (window.innerWidth < 1024) // Don't run on mobile
            return;

        let offset = document.documentElement.scrollTop;
        bgElement.style.backgroundPositionY = `${offset * 0.5}px`;
    }
}
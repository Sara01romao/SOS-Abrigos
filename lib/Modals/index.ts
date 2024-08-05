export interface ModalConfig {
    wrapperElement: HTMLElement;
    openTriggers: HTMLElement[] | NodeListOf<HTMLElement>;
    closeTriggers: HTMLElement[] | NodeListOf<HTMLElement>;
};

export default class BoneModal {
    private _wrapperElement: HTMLElement;
    private _openTriggers: HTMLElement[] | NodeListOf<HTMLElement>;
    private _closeTriggers: HTMLElement[] | NodeListOf<HTMLElement>;

    constructor(config: ModalConfig) {
        this._openTriggers = config.openTriggers;
        this._closeTriggers = config.closeTriggers;
        this._wrapperElement = config.wrapperElement;

        this.initTriggers();
    }

    initTriggers(): void {
        this._openTriggers.forEach((trigger: HTMLElement) => {
            trigger.addEventListener("click", () => this.open());
        })

        this._closeTriggers.forEach((trigger: HTMLElement) => {
            trigger.addEventListener("click", () => this.close());
        })

    }

    open(): void {
        this._wrapperElement.classList.remove("hidden");
    }

    close(): void {
        this._wrapperElement.classList.add("hidden");
    }
}

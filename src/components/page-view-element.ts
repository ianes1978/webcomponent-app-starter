import { LitElement, html, css, property, customElement } from "lit-element";

export class PageViewElement extends LitElement {
  @property({ type: Boolean })
  active = false

  shouldUpdate(): boolean {
    return this.active;
  }

}

import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/decorators";

@customElement("ex-trigger-method-child")
export class ExTriggerMethodChild extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: Number }) _value = 0;


  render() {
    return html`
                <div class="d-flex">
                  Random number: ${this._value}
                </div>
    `;
  }

  randomMethod() {
    this._value = Math.random()
  }
}

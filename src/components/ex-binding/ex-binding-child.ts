import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/decorators";


@customElement("ex-binding-child")
class ExBindingChild extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: String }) valueCustom = "";


  render() {
    return html`
              ${this.valueCustom}
    `;
  }

  emitterMethod(e) {
    this.dispatchEvent(new CustomEvent('changeValue', { detail: { value: e.target.value } }));
  }
}

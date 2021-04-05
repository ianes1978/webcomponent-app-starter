import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/lit-tools";


@customElement("ex-binding-child")
class ExBindingChild extends LitElement {

  static get styles() {
    return [
      globalStyle,
      css`
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

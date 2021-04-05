import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/lit-tools";
import './ex-attribute-child'


@customElement("ex-attribute")
class ExAttribute extends LitElement {
  static get styles() {
    return [globalStyle,
      css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: Boolean }) value = true;


  render() {
    return html`
          <h5>Attribute binary:</h5>
          <div class="d-flex">
          
            <ex-attribute-child ?disabled=${this.value}>
            </ex-attribute-child>
            <button type="button" class="btn btn-primary" @click="${() => this.value = !this.value}">Switch Attribute
              'disabled'</button>
          </div>
            `;
  }
}

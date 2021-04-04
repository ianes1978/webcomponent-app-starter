import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/decorators";


@customElement("ex-attribute-child")
class ExAttributeChild extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: Boolean }) disabled = false;


  render() {
    return html`
                
                  <input style="width:200px" type="text" class="form-control" ?disabled=${this.disabled}>
                
                
    `;
  }

  emitterMethod(e) {
    this.dispatchEvent(new CustomEvent('changeValue', { detail: { value: e.target.value } }));
  }
}

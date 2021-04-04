import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/decorators";


@customElement("ex-binding-child-complex")
class ExBindingChildComplex extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: Object }) valueCustom: { a: { b: Array<any>, c: { d: number } } } = { a: { b: [], c: { d: 0 } } };


  render() {
    return html`
            valueCustom.a.c.d => ${this.valueCustom.a.c.d}
    `;
  }

  emitterMethod(e) {
    this.dispatchEvent(new CustomEvent('changeValue', { detail: { value: e.target.value } }));
  }
}

import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/decorators";
import { store } from '../../store/store'
import { connect } from 'pwa-helpers'
import { addOne, subOne } from '../../store/store-counter'


@customElement("ex-emitter-child")
class ExEmitterChild extends LitElement {
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
                <h5>child that emit to his parent :</h5>
                <div class="d-flex">
                  <input style="width:200px" type="text" class="form-control" value="${this.valueCustom}"
                    @keydown="${this.emitterMethod}">
                
                </div>
    `;
  }

  emitterMethod(e) {
    this.dispatchEvent(new CustomEvent('changeValue', { detail: { value: e.target.value } }));
  }
}

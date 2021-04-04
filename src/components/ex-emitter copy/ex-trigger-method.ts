import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/decorators";
import { ExTriggerMethodChild } from './ex-trigger-method-child'
import './ex-trigger-method-child'


@customElement("ex-trigger-method")
class ExTriggerMethod extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: String }) _text = "Test me again";


  render() {
    return html`
          <h5>Trigger a child method from parent:</h5>
          <button type="button" class="btn btn-primary" @click="${this.triggerMethod}">Trigger the
            method
            random()</button>
          <ex-trigger-method-child id='abc'>
          </ex-trigger-method-child>
      `;
  }
  triggerMethod() {

    const element = this.shadowRoot.getElementById('abc') as ExTriggerMethodChild;
    element.randomMethod()

  }
}

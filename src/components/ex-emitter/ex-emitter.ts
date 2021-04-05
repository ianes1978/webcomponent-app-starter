import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/lit-tools";
import './ex-emitter-child'


@customElement("ex-emitter")
class ExEmitter extends LitElement {

  static get styles() {
    return [
      globalStyle,
      css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: String }) _text = "Test me again";


  render() {
    return html`
          <h5>Emit event from Child to Parent component and pass value:</h5>
          Value emitted from child to parent: <b>${this._text}</b>
          <ex-emitter-child valueCustom="${this._text}" @changeValue="${(e) => { this._text = e.detail.value }}">
          </ex-emitter-child>
      `;
  }
}

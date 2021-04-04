import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../core/decorators";
import { store } from '../store/store'
import { connect } from 'pwa-helpers'
import { addOne, subOne } from '../store/store-counter'


@customElement("ex-counter")
class ExCounter extends connect(store)(LitElement) {
  @globalStyle()
  static get styles() {
    return [css`
      :host{
        display: block;
      }
    `];
  }
  @property() _counter = "";

  stateChanged(state) {
    this._counter = state.counter;
  }
  render() {
    return html`
                <h5>counter variable stored in redux :</h5>
                <div class="input-group mb-3 btn-group" style="width:300px">
                  <button @click="${() => store.dispatch(subOne())}" type="button" class="btn  btn-primary">-</button>
                  <input type="number" class="form-control" value="${this._counter}">
                  <button @click="${() => store.dispatch(addOne())}" type="button" class="btn  btn-primary">+</button>
                </div>
    `;
  }
}

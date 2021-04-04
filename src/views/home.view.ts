import { html, css, property, customElement, LitElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/decorators";
import { store } from '../store/store'

import { addOne, subOne } from '../store/store-counter'
import '../components/bs-component';

@customElement("home-view")
class HomeView extends connect(store)(LitElement) {
    @globalStyle()
    static get styles() {
        return [];
    }
    @property() _counter = "";
    stateChanged(state) {
        this._counter = state.counter;
    }

    render() {
        return html`
                <h5> Home: </h5>
                <div class="card">
                    <div class="card-body">
                        <h4>
                            Component that ereditate the global styles from lightDom
                        </h4>
                        Bootstrap style
                    </div>
                </div>
                <bs-component></bs-component>
                
                <h5>counter variable stored in redux :</h5>
                <div class="input-group mb-3 btn-group" style="width:300px">
                    <button @click="${() => store.dispatch(subOne())}" type="button" class="btn  btn-primary">-</button>
                    <input type="number" class="form-control" value="${this._counter}">
                    <button @click="${() => store.dispatch(addOne())}" type="button" class="btn  btn-primary">+</button>
                </div>

            `;
    }
}

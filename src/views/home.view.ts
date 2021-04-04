import { html, css, property, customElement, LitElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/decorators";
import { store } from '../store/store'

import { addOne, subOne } from '../store/store-counter'
import '../components/bs-component';
import '../components/ex-counter';
import '../components/ex-input-binding';
import '../components/ex-emitter/ex-emitter';

@customElement("home-view")
class HomeView extends connect(store)(LitElement) {
    @globalStyle()
    static get styles() {
        return [];
    }

    stateChanged(state) {
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
                <h3 class="mt-3"> Some webcomponent examples: </h3>
                <ex-counter class="mt-3"></ex-counter>
                <hr>
                <ex-input-binding style=" margin-top: 25px;"></ex-input-binding>
                <hr>
                <ex-emitter style=" margin-top: 25px;"></ex-emitter>


            `;
    }
}

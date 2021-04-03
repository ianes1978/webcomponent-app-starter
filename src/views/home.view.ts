import { html, css, property, customElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/decorators";
import { store } from '../store/store'
import { PageViewElement } from '../components/page-view-element'
import '../components/bs-component';

@customElement("home-view")
class HomeView extends connect(store)(PageViewElement) {
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
                counter : ${this._counter}
            `;
    }
}

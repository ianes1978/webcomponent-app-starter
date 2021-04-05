import { html, css, property, customElement, LitElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/lit-tools";
import { store } from '../store/store'

import '../components/css-component';
@customElement("page-one-view")
class PageOneView extends connect(store)(LitElement) {

    static get styles() {
        return [globalStyle];
    }
    render() {
        return html`
        <h5> Page One: </h5>
        <div class="card">
            <div class="card-body">
                <h4>
                    Component ereditate global and with isolated style too
                </h4>
        
            </div>
        </div>
        <css-component></css-component>
            `;
    }
}

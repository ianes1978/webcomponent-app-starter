import { html, css, property, customElement,LitElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/decorators";
import { store } from '../store/store'
import '../components/first-component';

@customElement("page-one-view")
class PageOneView extends connect(store)(LitElement) {
    @globalStyle()
    static get styles() {
        return [];
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
        <first-component></first-component>
            `;
    }
}

import { html, css, property, customElement, LitElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/lit-tools";
import { store } from '../store/store'
import '../components/first-component';


@customElement("page-two-view")
class PageTwoView extends connect(store)(LitElement) {

    static get styles() {
        return [globalStyle];
    }
    render() {
        return html`
         
            <h5> Page Two: </h5>
            <div class="card">
                <div class="card-body">
                    <h4>
                        Component completly isolated!!!
                    </h4>
                    In this case without styles
                </div>
            </div>
            
            <first-component></first-component>
            `;
    }
}

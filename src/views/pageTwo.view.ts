import { html, css, property, customElement } from "lit-element";
import { connect } from 'pwa-helpers/connect-mixin.js';
import { globalStyle } from "../core/decorators";
import { store } from '../store/store'
import { PageViewElement } from '../components/page-view-element'
import '../components/css-component';

@customElement("page-two-view")
class PageTwoView extends connect(store)(PageViewElement) {
    @globalStyle()
    static get styles() {
        return [];
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
            <css-component></css-component>
            `;
    }
}

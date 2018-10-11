import { MorphElement } from '@moduware/morph-element/morph-element.js';
import '@moduware/morph-shared-styles/morph-shared-styles.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
 * `morph-list-view-title`
 * 
 *
 * @customElement
 * @polymer
 * @extends HTMLElement
 * 
 * @demo demo/index.html
 */
export class MorphListViewTitle extends MorphElement(PolymerElement) {
  static get template() {
    return html`
    <style include="morph-shared-styles">
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
      }

      :host([platform="ios"]) {
        text-transform: uppercase;
        color: #6d6d72;
        margin: 35px 15px 10px;
        line-height: 17px;
      }

      :host([platform="android"]) {
        color: rgba(0,0,0,.54);
        margin: 32px 16px 16px;
        line-height: 16px;
        font-weight: 500;
      }

    </style>

    <slot></slot>
`;
  }

  static get is() { return 'morph-list-view-title'; }
  static get properties() {
    return {};
  }
}

window.customElements.define(MorphListViewTitle.is, MorphListViewTitle);

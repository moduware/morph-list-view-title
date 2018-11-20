import { LitElement, html } from '@polymer/lit-element';
import '@moduware/morph-shared-styles/morph-shared-styles.js';
import { getPlatform } from './src/morph-element.js';
/**
 * `morph-list-view-title`
 * 
 *
 * @customElement
 * @extends HTMLElement
 * 
 * @demo demo/index.html
 */
export class MorphListViewTitle extends LitElement {
  render() {
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
    return {
      platform: {
        type: String,
        reflect: true
      }
    };
  }

  /**
   * LitElement lifecycle called once just before first updated() is called
   */
  firstUpdated() {
    super.firstUpdated();
    // check first if platform attribute is set in HTML before auto detecting and assigning platform using getPlatform()
    if (!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
  }

}

window.customElements.define(MorphListViewTitle.is, MorphListViewTitle);

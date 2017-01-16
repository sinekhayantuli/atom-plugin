'use strict';

const {head} = require('../utils');
const {renderSymbolHeader, renderExtend, renderUsages, renderParameters, renderInvocations} = require('././html-utils');


class KiteExpandFunction extends HTMLElement {
  static initClass() {
    return document.registerElement('kite-expand-function', {prototype: this.prototype});
  }

  setData(data) {
    const symbol = head(data.symbol);

    this.innerHTML = `
    <section class="summary">
      ${renderSymbolHeader(symbol)}
      ${renderExtend(symbol)}
      <p>${symbol.synopsis}</p>
    </section>

    ${renderParameters(symbol)}
    <section>
      ${renderInvocations(symbol)}
      ${renderUsages(symbol)}
    </section>

    <kite-open-link data-id="${symbol.id}"></kite-open-link>
    `;
  }
}

module.exports = KiteExpandFunction.initClass();
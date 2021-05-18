customElements.define('img-alt',
	class extends HTMLElement {
		constructor() {
			super();

			const imgTarget = document.getElementById(this.attributes.for.value);

			if ( !this.attributes.for || !imgTarget) 
				throw Error('alt-tag must have a "for" attribute targeting a valid element ID.');

			imgTarget.setAttribute('alt', this.innerText);

			this.remove();
		}
	}
);
import '../../styles/ua-skeleton.scss'

class UaWcSkeleton extends HTMLElement {
  static get observedAttributes() {
    return ['format', 'width', 'height']
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const format = this.getAttribute('format') ?? 'round'
    const width = this.getAttribute('width') ?? '240px'
    const height = this.getAttribute('height') ?? '56px'

    this.innerHTML = `<div class="ua-skeleton ${format}" style="width: ${width}; height: ${height};"></div>`
  }
}

if (!customElements.get('ua-wc-skeleton')) {
  customElements.define('ua-wc-skeleton', UaWcSkeleton)
}

export default UaWcSkeleton

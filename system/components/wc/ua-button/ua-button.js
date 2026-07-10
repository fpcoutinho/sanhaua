import '../../styles/ua-button.scss'

const boolAttr = (value) => value !== null && value !== 'false'

class UaButton extends HTMLElement {
  static get observedAttributes() {
    return [
      'type',
      'size',
      'appearance',
      'width-behavior',
      'border-style',
      'left-icon',
      'right-icon',
      'disabled',
      'autofocus',
      'value',
      'name',
      'form',
      'label'
    ]
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const type = this.getAttribute('type') ?? 'button'
    const size = this.getAttribute('size') ?? 'medium'
    const appearance = this.getAttribute('appearance') ?? 'primary'
    const widthBehavior = this.getAttribute('width-behavior') ?? 'auto'
    const borderStyle = this.getAttribute('border-style') ?? 'square'
    const leftIcon = this.getAttribute('left-icon')
    const rightIcon = this.getAttribute('right-icon')
    const disabled = boolAttr(this.getAttribute('disabled'))
    const autofocus = boolAttr(this.getAttribute('autofocus'))
    const value = this.getAttribute('value')
    const name = this.getAttribute('name')
    const form = this.getAttribute('form')
    const label = this.getAttribute('label') ?? 'Button'

    this.innerHTML = `
      <button class="ua-button ${size} ${appearance} ${widthBehavior} ${borderStyle}" type="${type}" ${disabled ? 'disabled' : ''} ${autofocus ? 'autofocus' : ''} ${value ? `value="${value}"` : ''} ${name ? `name="${name}"` : ''} ${form ? `form="${form}"` : ''}>
        ${leftIcon ? `<span class="material-symbols-rounded icon">${leftIcon}</span>` : ''}
        <span class="text">${label}</span>
        ${rightIcon ? `<span class="material-symbols-rounded icon">${rightIcon}</span>` : ''}
      </button>
    `

    const button = this.querySelector('button')
    if (button) {
      button.addEventListener('click', (event) => {
        this.dispatchEvent(new CustomEvent('click', { detail: event, bubbles: true }))
      })
    }
  }
}

if (!customElements.get('ua-button')) {
  customElements.define('ua-button', UaButton)
}

export default UaButton

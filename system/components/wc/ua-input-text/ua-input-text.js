import '../../styles/ua-input-text.scss'

const boolAttr = (value) => value !== null && value !== 'false'

class UaInputText extends HTMLElement {
  static get observedAttributes() {
    return [
      'appearance',
      'border-style',
      'size',
      'width-behavior',
      'id',
      'label',
      'icon',
      'prefix',
      'suffix',
      'placeholder',
      'required',
      'disabled',
      'readonly',
      'maxlength',
      'minlength',
      'autocomplete',
      'autocorrect',
      'autofocus',
      'name',
      'inputmode',
      'pattern',
      'spellcheck',
      'value'
    ]
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const appearance = this.getAttribute('appearance') ?? 'neutral'
    const borderStyle = this.getAttribute('border-style') ?? 'square'
    const size = this.getAttribute('size') ?? 'medium'
    const widthBehavior = this.getAttribute('width-behavior') ?? 'auto'
    const id = this.getAttribute('id') ?? ''
    const label = this.getAttribute('label') ?? 'Text'
    const icon = this.getAttribute('icon')
    const prefix = this.getAttribute('prefix')
    const suffix = this.getAttribute('suffix')
    const placeholder = this.getAttribute('placeholder') ?? ''
    const required = boolAttr(this.getAttribute('required'))
    const disabled = boolAttr(this.getAttribute('disabled'))
    const readOnly = boolAttr(this.getAttribute('readonly'))
    const maxLength = this.getAttribute('maxlength')
    const minLength = this.getAttribute('minlength')
    const autoComplete = this.getAttribute('autocomplete')
    const autoCorrect = this.getAttribute('autocorrect')
    const autoFocus = boolAttr(this.getAttribute('autofocus'))
    const name = this.getAttribute('name')
    const inputMode = this.getAttribute('inputmode')
    const pattern = this.getAttribute('pattern')
    const spellCheck = boolAttr(this.getAttribute('spellcheck'))
    const value = this.getAttribute('value') ?? ''

    this.innerHTML = `
      <label class="form-element-wrapper ${disabled ? 'disabled' : ''}">
        <span class="label">${label}</span>
        <div class="ua-input-text ${size} ${appearance} ${widthBehavior} ${borderStyle}">
          ${icon ? `<span class="material-symbols-rounded icon">${icon}</span>` : ''}
          ${prefix ? `<span class="prefix">${prefix}</span>` : ''}
          <input id="${id}" class="field" type="text" value="${value}" placeholder="${placeholder}" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''} ${readOnly ? 'readonly' : ''} ${maxLength ? `maxlength="${maxLength}"` : ''} ${minLength ? `minlength="${minLength}"` : ''} ${autoComplete ? `autocomplete="${autoComplete}"` : ''} ${autoCorrect ? `autocorrect="${autoCorrect}"` : ''} ${autoFocus ? 'autofocus' : ''} ${name ? `name="${name}"` : ''} ${inputMode ? `inputmode="${inputMode}"` : ''} ${pattern ? `pattern="${pattern}"` : ''} ${spellCheck ? 'spellcheck="true"' : 'spellcheck="false"'} />
          ${suffix ? `<span class="suffix">${suffix}</span>` : ''}
        </div>
      </label>
    `

    const input = this.querySelector('input')
    if (input) {
      input.addEventListener('input', (event) => {
        this.setAttribute('value', event.target.value)
        this.dispatchEvent(new CustomEvent('input', { detail: event, bubbles: true }))
      })
    }
  }
}

if (!customElements.get('ua-input-text')) {
  customElements.define('ua-input-text', UaInputText)
}

export default UaInputText

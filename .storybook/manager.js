import { addons } from 'storybook/manager-api'
import tema from './tema.js'

addons.setConfig({
  theme: tema,
  toolbar: {
    'storybook/background': { hidden: true }
  }
})

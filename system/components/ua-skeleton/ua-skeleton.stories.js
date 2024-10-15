import uaSkeleton from './ua-skeleton.vue'

export default {
  title: 'Components/UA-Skeleton',
  component: uaSkeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'A placeholder that represents the shape of the content that is loading.'
    }
  },
  decorators: [() => ({ template: '<story style="width: 350px; height: 35px;" />' })],
  argTypes: {
    format: {
      name: 'format',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'The format of the skeleton borders.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'select' },
      options: ['square', 'round', 'circle']
    }
  }
}

const Template = (args) => ({
  components: { uaSkeleton },
  setup() {
    return { args }
  },
  template: '<ua-skeleton :format=args.format />'
})

export const Default = Template.bind({})
Default.args = {
  format: 'square'
}

export const Circle = Template.bind({})
Circle.args = {
  format: 'circle'
}

export const Round = Template.bind({})
Round.args = {
  format: 'round'
}

export const Square = Template.bind({})
Square.args = {
  format: 'square'
}

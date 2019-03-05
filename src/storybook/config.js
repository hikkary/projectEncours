import { addDecorator, configure } from '@storybook/react'
import centered from '@storybook/addon-centered'

addDecorator(centered)
function loadStories() {
  require('../components/loginForm/story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)

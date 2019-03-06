import { addDecorator, configure } from '@storybook/react'
import centered from '@storybook/addon-centered'
// function requireAll(requireContext) {
//   return requireContext.keys().map(requireContext)
// }
addDecorator(centered)
function loadStories() {
  // requireAll(require.context('..', true, /_story\.jsx?$/))
  require('../components/loginForm/story.js')
  require('../components/exerciceTestThree/story.js')

  // You can require as many stories as you need.
}

configure(loadStories, module)

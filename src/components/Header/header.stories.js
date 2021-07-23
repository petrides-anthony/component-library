import React from 'react'
import Header from './index.js'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Header component', decorators: [withKnobs]}

export const card = () => {
  return <Header></Header>
}
import React from 'react'
import { storiesOf } from '@storybook/react'
import LoginForm from './index'
import './index.css'

storiesOf('Login Form', module)
  .add('default', () => <LoginForm />)
  .add('with FormName', () => <LoginForm formName="Coco" />)

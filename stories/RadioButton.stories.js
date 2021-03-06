import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/RadioButton.md'
import {stop} from './common'

import {Form, RadioButton} from '../src'

class RadioButtonController extends Component {
  constructor () {
    super()
    this.state = {
      value: 'on'
    }
    this.onChange = (ev) => {
      const {value} = ev.target
      action('onChange')(value)
      this.setState({value})
    }
  }
  render () {
    const {value} = this.state
    return (
      <Form>
        <RadioButton name='radiogroup' value='on'
          checkedValue={value}
          onChange={this.onChange}>
          Default radio button</RadioButton>
        <RadioButton name='radiogroup' value='off'
          checkedValue={value}
          onChange={this.onChange}>
          Checked radio button</RadioButton>
        <RadioButton name='radiogroup' value='disabled' disabled
          checkedValue={value}
          onChange={this.onChange}>
          Disabled radio button</RadioButton>
      </Form>
    )
  }
}

storiesOf('pure.css/forms', module)
  .add('RadioButton', withReadme(readme, () => (
    <div>
      <Form onSubmit={stop}>
        <RadioButton name='radio' value='1'>Default radio button</RadioButton>
        <RadioButton name='radio' value='2' defaultChecked>Checked radio button</RadioButton>
        <RadioButton name='radiod' value='3' disabled>Disabled radio button</RadioButton>
        <RadioButton name='radiod' value='4' disabled defaultChecked>Disabled checked radio button</RadioButton>
      </Form>

      <h4>RadioButton (controlled)</h4>
      <RadioButtonController />
    </div>
  )))

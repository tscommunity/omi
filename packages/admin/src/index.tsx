import { WeElement, render, h, options, tag } from 'omi'

options.ignoreAttrs = true

import { route } from 'omi-router'
import './index.css'

import './layouts/basic-layout'

import './layouts/components/layout-container'
import './components/admin-main-welcome'
import './components/status/status-error'
import './components/status/status-warning'
import './components/table/basic-table'
import './components/table/pagination-table'

import { tw, sheet } from 'omi-twind'

@tag('my-app')
export default class extends WeElement {

  static css = sheet.target

  data = {
    tagName: 'admin-main-welcome'
  }

  install() {
    route('/', () => {
      this.update()
    })

    route('/welcome', () => {
      this.data.tagName = 'admin-main-welcome'
      this.update()
    })

    route('/table/basic', () => {
      this.data.tagName = 'basic-table'
      this.update()
    })


    route('/table/pagination', () => {
      this.data.tagName = 'pagination-table'
      this.update()
    })

    route('/error', () => {
      this.data.tagName = 'status-error'
      this.update()
    })

    route('/warning', () => {
      this.data.tagName = 'status-warning'
      this.update()
    })


    route('*', function () {
      console.log('not found')
    })
  }

  render(props) {
    return (
      <basic-layout><this.data.tagName></this.data.tagName></basic-layout>
    )
  }
}

render(<my-app name='Omi'></my-app>, '#root')

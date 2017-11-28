// @flow
import React from 'react'

import EditorCanvas from './EditorCanvas'
import Toolbar from './Toolbar'

type Props = {
  value: Array<ItemValue>,
  onChange: (event: PatchEvent) => void,
  fullscreen: boolean
}

export default class BlockEditor extends React.Component<Props> {

  render() {
    const {onChange, value} = this.props
    return (
      <div>
        <Toolbar />
        <EditorCanvas
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

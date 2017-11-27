import React from 'react'
import {Editor} from 'slate-react'

// @flow
export default class BlockEditor extends React.Component<*> {

  // eslint-disable-next-line consistent-return
  renderNode = props => {

  }

  render() {
    const {onChange, value} = this.props
    return (
      <div>
        <Editor
          value={value}
          onChange={onChange}
          renderNode={this.renderNode}
        />
      </div>
    )
  }

}

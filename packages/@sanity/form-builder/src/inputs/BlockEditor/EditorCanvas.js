// @flow
import {Editor} from 'slate-react'
import React from 'react'

type Props = {
  value: Array<ItemValue>,
  onChange: (event: PatchEvent) => void
}

export default class EditorCanvas extends React.Component<Props> {

  static defaultProps = {
    onChange() {}
  }


  // eslint-disable-next-line consistent-return
  renderNode = props => {

  }

  render() {
    const {onChange, value} = this.props
    return (
      <Editor
        value={value}
        onChange={onChange}
        renderNode={this.renderNode}
      />
    )
  }
}

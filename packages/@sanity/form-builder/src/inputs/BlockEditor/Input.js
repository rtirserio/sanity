// @flow
import React from 'react'

import FormField from 'part:@sanity/components/formfields/default'
import FullscreenDialog from 'part:@sanity/components/dialogs/fullscreen?'

import type {BlockArrayType, ItemValue} from './typeDefs'

import BlockEditor from './BlockEditor'
import PatchEvent from '../../PatchEvent'
import styles from './styles/Input.css'

type Props = {
  type: BlockArrayType,
  value: Array<ItemValue>,
  level: number,
  onChange?: (event: PatchEvent) => void,
  onNodePatch?: (event: PatchEvent) => ItemValue
}

type State = {
  fullscreen: boolean,
}

export default class BlockEditorInput extends React.Component<Props, State> {

  static defaultProps = {
    onChange() {},
    onNodePatch() {}
  }

  state = {
    fullscreen: false
  }

  handleFullScreenClose = () => {
    this.setState({
      fullscreen: false
    })
  }

  render() {
    const {type, level, onChange, value} = this.props
    const {fullscreen} = this.state
    const editorProps = {onChange, value}
    return (
      <FormField
        label={type.title}
        description={type.description}
        level={level}
      >
        {
          fullscreen ? (
            <FullscreenDialog isOpen onClose={this.handleFullScreenClose}>
              <BlockEditor {...editorProps} />
            </FullscreenDialog>
          ) : <BlockEditor {...editorProps} />
        }
      </FormField>
    )
  }
}

import * as React from 'react'

import './pole.scss'

export interface PoleProps {
  rotate?: number
}

/**
 * Pole
 */
class Pole extends React.Component<PoleProps> {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return (
      <div>Pole</div>
    )
  }
}

export default Pole

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Text from '../Text/Text'

export default class SceneOne extends PureComponent {
  static propTypes = {
  }

  static defaultProps = {
  }

  state = {
    counter: 0,
  }

  updateCounter = (delay) => {
    setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, delay)
  }

  render() {
    const { counter } = this.state

    return (
      <div className="container">
        <div className="text-container">
          {counter === 0 &&
            <Text
              text="You wake up in the middle of the night, lights out. The moon lights the place through the window."
              fade={3000}
              writeSpeed={70}
              updateCounter={this.updateCounter}
            />
          }
          {counter === 1 &&
            <Text
              text="You realize. This is not your room..."
              fade={10000}
              writeSpeed={150}
              updateCounter={this.updateCounter}
            />
          }
        </div>

        <style jsx>{`

          @import './static/scss/variables';
          @import './static/scss/mixins';

          .button {

          }

        `}</style>
      </div>
    )
  }
}

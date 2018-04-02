import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Text extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    writeSpeed: PropTypes.number.isRequired,
    fade: PropTypes.number.isRequired,
    updateCounter: PropTypes.func.isRequired,
  }

  state = {
    currentText: '',
    intervalId: '',
    className: '',
  }

  componentDidMount() {
    const { writeSpeed } = this.props
    const intervalId = setInterval(() => {
      this.renderText()
    }, writeSpeed)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
  }

  renderText = () => {
    const { text, fade, updateCounter } = this.props
    const { currentText, intervalId } = this.state
    if (currentText.length < text.length) {
      this.setState({ currentText: text.slice(0, currentText.length + 1) })
    } else {
      clearInterval(intervalId)
      this.setState({ className: 'fade' })
      updateCounter(fade)
    }
  }

  render() {
    const { currentText, className } = this.state
    const { fade } = this.props

    const paragraphStyles = {
      'transition-duration': `${fade - (fade / 2)}ms`,
      'transition-delay': `${fade - (fade / 2)}ms`,
    }

    return (
      <p className={`text ${className}`} style={paragraphStyles}>
        {currentText}
        <style jsx global>{`

          @import './static/scss/variables';
          @import './static/scss/mixins';

          .text {
            opacity: 1;
            &.fade {
              opacity: 0;
              transition: opacity 1000ms ease-out;
            }
          }

        `}</style>
      </p>
    )
  }
}

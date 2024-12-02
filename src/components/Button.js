//Button components
//Using destructuring to bring in color and text and use them in the style of the btn
import PropTypes from 'prop-types'


function Button({ color, text, onClick }) {

  return (
    <button onClick={onClick} style={{ backgroundColor: color }}
      className="btn">
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
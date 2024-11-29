//Button components
//Using destructuring to bring in color and text and use them in the style of the btn

function Button({ color, text }) {
  return (
    <button style={{ backgroundColor: color }}
      className="btn">
        {text}
    </button>
  )
}

export default Button
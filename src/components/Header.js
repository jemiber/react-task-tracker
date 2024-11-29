import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='Hello'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* To add styles:
we can add styles inline in the h1 by saying:
<h1 style={{ color: 'red', background: 'black' }}>{title}</h1>
Or we can create a variable to hold our styles like this:
const headingStyle = {
    color: 'red',
    background: 'black' 
}
And then plug it in the h1 like this:
<h1 style={ headingStyle }>{title}</h1>
and it's going to be teh same thing
*/

export default Header
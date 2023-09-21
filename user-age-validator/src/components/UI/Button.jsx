import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = ({ children, type, onClick }) => {
    return (
        <button className={classes.button} type={type || 'button'} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node, // Accepts any valid React node (component, element, text)
        PropTypes.arrayOf(PropTypes.node), // Accepts an array of React nodes
    ]),
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
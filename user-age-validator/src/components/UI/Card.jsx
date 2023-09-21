import classes from '../UI/Card.module.css'
import PropTypes from 'prop-types'

const Card = ({ children, className }) => {
    return (
        <div className={`${classes.card} ${className}`} >{children}</div>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node, // Accepts any valid React node (component, element, text)
        PropTypes.arrayOf(PropTypes.node), // Accepts an array of React nodes
    ]),
    className: PropTypes.string
}


export default Card
import ReactDom from 'react-dom'
import Button from './Button'
import PropTypes from 'prop-types'
import classes from '../UI/ErrorModal.module.css'
import Card from './Card'

const BackDrop = ({ children, handleClose }) => {
    return <>
        <div className={classes.backdrop} onClick={handleClose}>{children}</div>
    </>
}

const Modal = ({ error, handleClose }) => {
    return <>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{error.title}</h2>
            </header>
            <div className={classes.content}>{error.message}</div>
            <footer className={classes.actions}>
                <Button onClick={handleClose}> Okay</Button>
            </footer>
        </Card>
    </>
}

const ErrorModal = ({ error, handleClose }) => {
    return (
        <>
            {ReactDom.createPortal(<BackDrop handleClose={handleClose} />, document.getElementById('backdrop'),)}
            {ReactDom.createPortal(<Modal error={error} handleClose={handleClose} />, document.getElementById('modal'),)}

        </>
    )
}


ErrorModal.propTypes = {
    error: PropTypes.object,
    handleClose: PropTypes.func
}

BackDrop.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    handleClose: PropTypes.func
}

Modal.propTypes = {
    handleClose: PropTypes.func,
    error: PropTypes.object,

}

export default ErrorModal
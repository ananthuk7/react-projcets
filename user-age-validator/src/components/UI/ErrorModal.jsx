
import Button from './Button'
import PropTypes from 'prop-types'
import classes from '../UI/ErrorModal.module.css'
import Card from './Card'

const ErrorModal = ({ error, handleClose }) => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{error.title}</h2>
                </header>
                <div className={classes.content}>{error.message}</div>
                <footer className={classes.actions}>
                    <Button onClick={handleClose}> Okay</Button>
                </footer>
            </Card>
        </div >
    )
}


ErrorModal.propTypes = {
    error: PropTypes.object,
    handleClose: PropTypes.func
}

export default ErrorModal
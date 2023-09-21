import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from './UI/ErrorModal'


const AddUser = ({ addUser }) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invald Input',
                message: 'please enter a valid name and age (non empty values)'
            })
            return
        }
        if (+userAge.trim() < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age > 1'
            })
            return
        }
        addUser(userName, userAge)
        setUserAge('')
        setUserName('')
    }

    const handleClose = () => {
        setError(null)
    }
    return (
        <>
            {error && <ErrorModal error={error} handleClose={handleClose} />}
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type='number' placeholder='age' value={userAge} onChange={(e) => setUserAge(e.target.value)} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </>
    )
}


AddUser.propTypes = {
    addUser: PropTypes.func
}

export default AddUser
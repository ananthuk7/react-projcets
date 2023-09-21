import Card from './UI/Card'
import PropTypes from 'prop-types'
import classes from './UserList.module.css'

const UserList = ({ users }) => {
    return (
        <Card className={classes.users}>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}({user.age} years old)</li>)}
            </ul>
        </Card>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
}

export default UserList
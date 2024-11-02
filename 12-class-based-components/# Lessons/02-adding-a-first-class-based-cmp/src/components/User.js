import { Component } from 'react'

import classes from './User.module.css'

// @ must extend Component
class User extends Component {
  render() {
    // still can access props -> this.props
    return <li className={classes.user}>{this.props.name}</li>
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User

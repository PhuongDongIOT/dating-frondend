import React from "react";

import styles from "./style.module.css";

class Register extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className={styles.popupRegister}>
        <form>
          <h2>Register</h2>          
          <p>Please fill in this form to create an account.</p>
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </form>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Register;

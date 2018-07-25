import React from 'react'
import styles from './Form.css'

// const input = {
//   padding: '10px',
//   border: '2px solid #FFF',              // перший варіант стилізації
//   width: '165px',
// };
//
// const btn = {
//   padding: '10px',
//   fontSize: '16px',                        // перший варіант стилізації
//   margin: '10px',
//   marginRight: '0px',
//   backgroundColor: '#0066FF',
//   color: '#FFF',
//   border: '2px solid #006',
// };

class NewForm extends React.Component {
  state = {
    login: '',
    password: '',
  };

  send = (e) => {
    e.preventDefault();
  };

  changeLoginInput = (e) => {
    const value = e.target.value;
    this.setState({
      login: value,
    })
  };

  changePasswordInput = (e) => {
    const value = e.target.value;
    this.setState({
      password: value,
    })
  };

  changeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    })
  };

  render() {
    return (
      <form onSubmit={this.send}>
        <input type="text"
               name='login'
               placeholder='Your login'
               value={this.state.login}
               onChange={this.changeInput}
               className={styles.input}/>
        <input type="password"
               name='password'
               placeholder='Password'
               value={this.state.password}
               onChange={this.changeInput}
               className={styles.input}/>
        <button type='submit' className={styles.btn}>Send</button>
      </form>
    )
  }
}

export default NewForm

/*eslint-disable*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.';
import styles from './Task.css'


class Task extends Component {
    state = {
        Ed: false,
        taskText: this.props.text,
    };

    deleteLi = () => {
        this.props.func(this.props.id)
    };

    edit = () => {
        this.setState(state => ({
            Ed: !state.Ed,
        }))
    };

    inputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        })
    };

   upD =() =>{
        this.props.update(this.props.id, this.state.taskText);
        this.edit();
    };

    render() {
        return (
            <li className={styles.li}>
                {this.state.Ed ?
                    <div>
                        <input className={styles.input} type='text' value={this.state.taskText} name='taskText' onChange={this.inputChange}/>
                        <Button className={styles.btn} text='Save' onClick={this.upD}/>
                        <Button className={styles.btn} text='Cancel' onClick={this.edit}/>
                    </div>
                    :
                    <div>
                        {this.props.text}
                        <Button className={styles.btn} text='Edit' onClick={this.edit}/>
                        <Button className={styles.btn} text='Delete' onClick={this.deleteLi}/>
                    </div>
                }
            </li>
        )
    }
}

Task.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    func: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
};

export default Task;






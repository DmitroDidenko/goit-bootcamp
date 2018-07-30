import React from 'react';
import Task from '../Task/Task';
import PropTypes from 'prop-types';
import styles from './TaskList.css';

const TaskList = ({array, deleteItem, update}) => {
    return (
        <ul className={styles.ul}>
            {array.map(el => <Task text={el.text} id={el.id} key={el.id} func={deleteItem} update={update}/>)}
        </ul>
    )
};

TaskList.propTypes = {
    write: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};

export default TaskList
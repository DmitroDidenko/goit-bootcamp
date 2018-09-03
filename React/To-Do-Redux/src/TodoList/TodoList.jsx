import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, del, change} from '../actions/todoActions'
import './TodoList.css';


class TodoList extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"
                           className='inp'
                           placeholder='kill him'
                           onChange={this.props.reload}
                           name={this.props.decrement}
                           value={this.props.increment}
                    />
                    <input type="submit" className='inp'/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        addList: state.addList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: function () {
            dispatch(add())
        },

        decrement: function () {
            dispatch(del())
        },

        reload: function () {
            dispatch(change())
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(TodoList);


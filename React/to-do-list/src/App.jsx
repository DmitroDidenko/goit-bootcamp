import React, {Component} from 'react';
import axios from 'axios'
import ToDoList from './Components/ToDoList/ToDoList';
import Button from './Components/Button/Button';
import styles from './App.css';


class App extends Component {
    state = {
        items: [],
        item: '',
    };

    componentDidMount() {
        axios.get('/tasks')                                   // отримуємо по ссилці інформацію
            .then(({status, data}) => {                       // запитуємо статус і шнформацію і робимо перевірку
                if (status === 200) {                         // якщо працює . то виводить массив дата
                    this.setState({
                        items: data,
                    })
                }
            })
    }

    addItem = (e) => {
        e.preventDefault();

        const task = {text: this.state.item};
        axios.post('/tasks', task).then(({data, status}) => {
            if (status === 201) {
                this.setState(prev => ({
                    items: [data, ...prev.items],
                    item: '',
                }))
            }
        })

        // const task = {
        //     text: this.state.item,
        //     id: Date.now()
        // };
        //
        // if (this.state.item !== '') {
        //     this.setState(prevState => ({
        //         items: [task, ...prevState.items],
        //         item: '',
        //     }))
        // }
    };

    itemChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    };

    deleteItem = (id) => {

        axios.delete(`/tasks/${id}`)
            .then(({status}) => {
                if (status === 200) {
                    this.setState({
                        items: this.state.items.filter(el => el.id !== id)
                    })
                }
            })

        // const filter = this.state.items.filter(el => el.id !== id);
        // this.setState({
        //     items: filter
        // })
    };

    updateItem = (id, word) => {

        const task = this.state.items.find(el => el.id === id);
        axios.put(`/tasks/${id}`, {...task, text: word})        // варіант 2
            .then(({status, data}) => {
                if (status === 200) {
                    this.setState({
                        items: this.state.items.map(el => el.id===id ? data : el)
                    })
                }
            })

        // axios.put(`http://localhost:3001/tasks/${id}`,{text: text})              // варіант 1
        //     .then(response => console.log(response))

        // const updateResult = this.state.items.map(el => (el.id === id ? {...el, text: text} : el));
        // this.setState({
        //     items: updateResult,
        // })
    };

    render() {
        return (
            <div className={styles.todoListMain}>
                <div>
                    <form onSubmit={this.addItem}>
                        <input
                            placeholder='enter task'
                            className={styles.input}
                            onChange={this.itemChange}
                            name='item'
                            value={this.state.item}
                            type='text'
                        />
                        <Button type='submit' text='Add'/>
                    </form>
                    <ToDoList tasks={this.state.items} deleteItem={this.deleteItem} update={this.updateItem}/>
                </div>
            </div>
        );
    }
}

export default App;

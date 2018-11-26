import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};
export default App

// const el = React.createElement('h1', null, 'React the best');
// console.log('Element', el);
// const el = React.createElement('h1', {className:'title'}, 'React the best');
// const el = React.createElement('div', {className: 'box'}, React.createElement('h1', {className: 'title'}, 'React the best'),
//     React.createElement('p', {className: 'text'}, 'lorem ipsum text'));
// ReactDOM.render(el, document.getElementById('root'));

// const el = <div className="box">
//     <h1 className="title">Title</h1>
//     <p className="text">Lorem ipsum dolor sit amet.</p>
// </div>;
// ReactDOM.render(el, document.getElementById('root'));


// const el = <h1>sum 2 + 2 = {2 + 2}</h1>;
// ReactDOM.render(el, document.getElementById('root'));

// const a = 4;
// const b = 5;
// const el = <h1>sum {a + b}</h1>;
// ReactDOM.render(el, document.getElementById('root'));

// const isActive = false;
// const el = <h1 className={isActive ? 'active' : 'disable'}>Title</h1>;
// ReactDOM.render(el, document.getElementById('root'));

// const MyFirstComp = () =>{
//     return <div>My First Component</div>
// };
// ReactDOM.render(<MyFirstComp/>, document.getElementById('root'));



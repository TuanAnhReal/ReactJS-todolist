import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import TodoApp from './todoapp_03/TodoApp';
import store from './todoapp_03/redux/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
}

export default App;

// import { Provider } from 'react-redux';
// import CounterApp from './redux_01/CounterApp';
// import store from './redux_01/redux/store';

// function App() {
//     return (
//         <Provider store={store}>
//             <CounterApp />
//         </Provider>
//     );
// }

// export default App;
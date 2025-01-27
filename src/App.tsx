import React from 'react'
import styles from './App.module.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task 1', description: 'description 1', checked: false },
    { id: 2, name: 'task 2', description: 'description 2', checked: false },
    {
        id: 3,
        name: 'task 3',
        description:
        'Long long long long read long long long read long long long read long long long read long long long read long long long read long long long read long long long read ',
        checked: true
    }
];

export const App = () => {
    console.log('@todos', DEFAULT_TODO_LIST);

    return (
        <div className={styles.app_container}>
            <div className={styles.container}>todo</div>
        </div>
    );
}

export default App

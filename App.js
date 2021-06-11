import React , {useState} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTask from './Components/AddTask';

export default function App() {

    const [todos, setTodos] = useState([
        {text: 'Do Morning Stretches', key:'1'},
        {text: 'Meditation after bath', key:'2'},
        {text: 'Attend Classes', key:'3'},
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodo) => {
            return prevTodo.filter(todo => todo.key != key);
        });
    }

    const submitHandler = (text) => {
        setTodos((prevTodo) => {
            return[
            {text:text, key: Math.random().toString()}, ...prevTodo 
        ];
        })
    }

    return(
        <View style={styles.container}>        
            {/* Header */} <Header/>
            <View style = {styles.content}>
                {/* To Do Component */} <AddTask submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList 
                        data={todos} 
                        renderItem ={({ item }) => (
                            //<Text>{item.text}</Text>
                            <TodoItem item={item} pressHandler = {pressHandler}/>
                        )}
                    />                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    content:{
        padding: 40, //To move it down
    },
    list:{
        marginTop: 20 // To have a margin away from the form
    },
});
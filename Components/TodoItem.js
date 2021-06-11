import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, View} from 'react-native';

export default function TodoItem ({item, pressHandler}){ // Instead of props we can directly use only the required data from the props
    return(
        <TouchableOpacity >
            <View style = {styles.item}>
                <Text>{item.text}</Text>
                <View style={styles.button}>
                    <Button onPress={() => pressHandler(item.key)} title="Delete"></Button>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        padding: 15,
        marginTop: 15,
        borderColor:'blue',
        borderWidth:1,
        borderRadius: 10
    },
    button:{
        color:'brown',
        width: 100,
        height: 10,
    }
});
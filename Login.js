import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

class Login extends React.Component {
render() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.header}>Log in</Text>
            <TextInput style={styles.uname} placeholder="Username" />
            <TextInput style={styles.password} placeholder="Password" />
            <Text style={styles.smallTxt}>Forgot Password?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text>Don't have an account? <Text style={styles.signupText}>Sign Up</Text></Text>
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
    );
}   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        color: 'rgb(80, 38, 170)',
        fontSize: 30,
        fontWeight: '500'
    },
    uname: {
        width: 200,
        height:50,
        borderBottomColor: 'rgb(80, 38, 170)',
        borderBottomWidth: 2,
        marginVertical: 10
    },
    password: {
        borderBottomColor: 'rgb(80, 38, 170)',
        borderBottomWidth: 2,
        marginVertical: 10,
        width: 200,
        height: 50
    },
    button: {
        backgroundColor: 'rgb(80, 38, 170)',
        alignSelf: 'center',
        width: 150,
        height: 65,
        borderRadius:35,
        marginVertical: 40
    },
    buttonText: {
        color: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 25,
        paddingVertical: 15
    },
    form: {
        flex: 0.7,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        marginHorizontal: 25,
        marginVertical: 60,
        borderColor: "rgb(224, 224, 224)",
        borderWidth: 1,
        borderStyle: 'solid'
    },
    smallTxt: {
        alignSelf: 'flex-end',
        color: 'rgb(89, 136, 187)',
        fontWeight: '600'
    },
    signupText: {
        color: 'rgb(121, 81, 190)',
        fontWeight: '600'
    }
});
export default Login
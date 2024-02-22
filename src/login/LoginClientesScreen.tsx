import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginClientesScreen(): JSX.Element {
    
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

     function login(){
        const dados = {
            nome: nome,
            email: email,
            password: password,
        }

        console.log(dados);
     }


    return(
         <View style={styles.container}>
            <Image 
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/images/user.png')}
            />


            <View style={styles.card}>

            <Text style={styles.title}>Login Cliente</Text>
                <TextInput style={styles.input}
                 placeholder="Nome" 
                placeholderTextColor={"000000"}
                onChangeText={(textNome) => setNome(textNome)}
                />

                <TextInput style={styles.input}
                 placeholder="E-mail" 
                placeholderTextColor={"000000"}
                onChangeText={(textEmail) => setEmail(textEmail)}
                />

                <TextInput style={styles.input}
                 placeholder="Senha" 
                placeholderTextColor="#151413"
                onChangeText={(textPassword) => setPassword(textPassword)}
                secureTextEntry
                />
            
            <TouchableOpacity style={styles.button}
            onPress={() =>{login() }}>
                <Text style={styles.buttontext}>Entrar</Text>
            </TouchableOpacity>
              
            <TouchableOpacity >
                <Text style={styles.forgotPassword}>Esqueceu senha</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={styles.forgotPassword}>Não tem conta? Cadastra-se</Text>
            </TouchableOpacity>
            
            </View>

            <Image 
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/images/instaa.png')}
            />
         </View>
    );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00CED1'
    },
    
    logo:{
        width: 80,
        height:80,
        marginBottom: 50,
        marginTop: -150

    },
    card: {
        backgroundColor: '#F0FFFF',
        width: 300,
        borderRadius: 40,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity: 0.8,
        shadowRadius:2,
    },

    logoinsta:{
        width: 70,
        height:70,
        marginBottom: 0,
        marginTop: -100,
        alignItems: 'center'
        

    },
    title: {
         fontSize: 20,
         fontWeight:'bold',
         color: '#000000',
         marginBottom: 20,
         textAlign: 'center'
    },
    input: {
     backgroundColor: '#C0C0C0',
     height:40,
     marginBottom: 15,
     paddingHorizontal:10,
     borderRadius: 8,
     borderWidth: 1,
     borderColor: '#20B2AA'
    },
    button: {
       backgroundColor: 'black',
       height: 30,
       borderRadius: 8

    },

    buttontext: {
       color: 'white',
       textAlign: 'center',
       fontSize: 16,
       lineHeight: 30,
       borderRadius: 8,
       borderWidth: 1,
       borderColor: 'black'
    },

    forgotPassword: {
       color:'black',
       textAlign: 'center',
       marginTop: 10
    },
    

});


export default LoginClientesScreen;
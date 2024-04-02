import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const imageBackground = require('./images/AgendaGo.png');

export default function PageLogin() {


    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0.06 }}
                end={{ x: 0, y: 0.19 }}
                colors={['#ffffff', '#c3cbe1', '#2f4c98']}
                style={styles.backgroundGradient} >

                <Image source={imageBackground} style={{ marginTop: 30, marginBottom: 50 }} />

                <View style={styles.inputEmail}>
                    <Text>Email</Text>
                    <TextInput
                        placeholder='usuario@gmail.com'
                    />
                </View>
                <View style={styles.inputSenha}>
                    <Text>Senha</Text>
                    <TextInput
                        placeholder='**********'
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '85%' }}>
                    <TouchableOpacity style={styles.btn_entrar}>
                        <Text style={{
                            fontSize: 20,
                            color: '#a5b1d1',
                        }}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_cadastrar}>
                        <Text style={{
                            fontSize: 20,
                            color: '#4f7ac7',
                        }}>Cadastrar</Text>
                    </TouchableOpacity>


                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity >
                        <Text style={{ color: '#909fc8', borderBottomWidth: 1, marginBottom: 2 }}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 20 }}>Entrar com o Google</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        color: 'white',
        fontSize: 20,
        width: '85%',
        height: '9%',
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#4a6eb6',
        padding: 5,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginBottom: 10,
    },
    inputSenha: {
        color: 'white',
        fontSize: 20,
        width: '85%',
        height: '9%',
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#4a6eb6',
        padding: 5,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginBottom: 10,
    },
    btn_entrar: {
        backgroundColor: '#4d6fb7',
        borderRadius: 20,
        width: '45%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn_cadastrar: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: '45%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

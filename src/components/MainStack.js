import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import DrawerMain from './DrawerMain';

const MainStack = createAppContainer(createStackNavigator(
    {   
        // path login /login
        Login: {
            screen: LoginForm //sebuah class component
        },
        Register: {
            screen: RegisterForm
        },
        DrawerMain: {
            //pengiriman navigasi dari main stack ke drawer supaya ketika logout bisa langsung main stack ke page login
            // drawer terima alat navigasi dari main stack
            // sebagai penengah 
            // dikirim dari main stack ke drawer
            // harus lewat screenprops
            screen: ({ navigation }) => <DrawerMain screenProps={{ rootStackNavigator: navigation }}/>
        }
    },
    {
        // menentukan page pertama yang kebuka
        //optional
        initialRouteName: 'Login', //dari yang ada di atas dan defaultnya adalah page pertama , yaitu login diatas
        headerMode: 'none' // menghilangkan header
    }
));

export default MainStack;
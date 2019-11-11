import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import MainStack from './src/components/MainStack';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from './src/actions';

class AppInit extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBrXJdfkwMJ0XkHtiFqAFiTgsbqo1tabsM",
      authDomain: "instagrin-practice.firebaseapp.com",
      databaseURL: "https://instagrin-practice.firebaseio.com",
      projectId: "instagrin-practice",
      storageBucket: "instagrin-practice.appspot.com",
      messagingSenderId: "81837892631",
      appId: "1:81837892631:web:4d4f9bf16db1f5b5bf2852"
    };
    // Initialize Firebase
    //console.log('Isi Firebase Apps', firebase.apps)
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
      <MainStack />
    )
  }
}

export default connect(null, { notLoginYet, alreadyLogin })(AppInit);
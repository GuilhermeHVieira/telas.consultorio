import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Registro from './Registro';
import RecuperacaoSenha from './RecuperacaoSenha';
import Home from './Home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <Login navigateTo={setCurrentScreen} />;
      case 'Registro':
        return <Registro navigateTo={setCurrentScreen} />;
      case 'RecuperacaoSenha':
        return <RecuperacaoSenha navigateTo={setCurrentScreen} />;
      case 'Home':
        return <Home navigateTo={setCurrentScreen} />;
      default:
        return <Login navigateTo={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

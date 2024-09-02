import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const App = () => {
  const [tema, setTrocaTema] = useState('#ffffff');

  const trocaTema = () => {
    const temas = ['#696969', '#ffffff'];
    const indice = Math.floor(Math.random() * temas.length);
    setTrocaTema(temas[indice]);
  };

  return (
    <View style={[styles.container, { backgroundColor: tema }]}>
      <MaterialIcons name="contrast" size={24} color="#007bff" onPress={trocaTema}  />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
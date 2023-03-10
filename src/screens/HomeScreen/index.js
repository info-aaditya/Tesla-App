import React from 'react';
import { View, Text } from 'react-native';
import CartItem from '../../components/CartItem';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CartItem />
    </View>
  )
}

export default HomeScreen;

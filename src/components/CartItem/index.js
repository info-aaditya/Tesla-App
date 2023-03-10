import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import menuItems from '../../assets/data/menuItems';
import Menu from '../Menu';
import styles from './styles';

const CartItem = () => {
  const [locked, setLocked ] = useState(true)
  const clickLock = () => {
    if(locked){
      setLocked(false);
    } else {
      setLocked(true);
    }
  }

  const Header = () => {
    return (
      <>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity onPress={clickLock} >
            <View style={styles.controlsButton}>
              <FontAwesome5 name= {locked ? "lock" : "unlock-alt"}
                style={styles.iconView}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={''}>
            <View style={styles.controlsButton}>
              <FontAwesome5 name="key"
                style={styles.iconView}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={''}>
            <View style={styles.controlsButton}>
              <FontAwesome5 name="fan"
                style={styles.iconView}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={''}>
            <View style={styles.controlsButton}>
              <MaterialCommunityIcons name="lightning-bolt"
                style={styles.iconView}
             />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={''}>
            <View style={styles.controlsButton}>
              <MaterialCommunityIcons name="bluetooth"
                style={styles.iconView}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source = {
          require('../../assets/images/background.png')
        }
        style={styles.bgContainer}
      />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={''}>
          <FontAwesome name="gear" size={30} color="#DDD" />
        </TouchableOpacity>

        <View style={styles.headerTitle}>
          <Text style={styles.title}>
            My model S
          </Text>
          <Text style={styles.username}>
            Aaditya
          </Text>
        </View>

        <TouchableOpacity onPress={''}>
          <FontAwesome name="user-circle" size={30} color="#DDD" />
        </TouchableOpacity>
      </View>

      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image 
          source = { 
            require('../../assets/images/battery.png')
          }
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}> 150 miles </Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}> Parked </Text>
      </View>

      {/* Menu */}
      <FlatList 
        data={menuItems}
        renderItem={({item}) => (
          <Menu menuItems={item} />
        )}
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CartItem;

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import menuItems from '../../assets/data/menuItems';
import styles from './styles';

const Menu = ({ menuItems }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity key={menuItems.id} onPress={''}>
        <View style={styles.menuRow}>
          <FontAwesome name={menuItems.name}
            style={styles.iconView}
          />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>
              {menuItems.title}
            </Text>
            <Text style={styles.subTitle}>
              {menuItems.subTitle}
            </Text>
          </View>
          <FontAwesome name="angle-right"
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Menu;

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import menuItems from '../../assets/data/menuItems';
import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.container}>
      {menuItems.map(item => (
        <TouchableOpacity key={item.id} onPress={''}>
          <View style={styles.menuRow}>
            <FontAwesome name={item.name}
              style={styles.iconView}
            />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>
                {item.title}
              </Text>
              {item.subTitle && (
                <Text style={styles.subTitle}>
                  {item.subTitle}
                </Text>
              )}
            </View>
            <FontAwesome name="angle-right"
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      ))}    
    </View>
  );
}

export default Menu;

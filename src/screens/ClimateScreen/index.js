import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import climateImage from '../../assets/images/climate.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import styles from './styles';

const ClimateScreen = () => {
  const [temperature, setTemperature] = useState(38);
  const [on, setOn] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={climateImage}
        style={styles.imageView}
      />

      <TouchableOpacity style={styles.back}>
        <Entypo name="chevron-left" size={24}
        style={styles.iconView}/>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.label}>
          Interior 74°F - Exterior 66°F
        </Text>

        <View style={styles.controlsRow}>
          <TouchableOpacity onPress={() => setOn(!on)} style={styles.iconContainer}>
            <MaterialCommunityIcons 
              name="power" size={42} 
              color={on ? 'white': 'red'}
            />
            <Text style={styles.iconText}>{on ? 'On' : 'Off'}</Text>
          </TouchableOpacity>

          <View style={styles.tempContainer}>
            <Entypo 
              onPress={() => setTemperature(temperature -1)}
              name="chevron-left"
              style={styles.tempIconView}
            />
            <Text style={styles.tempText}>
              {temperature} °C
            </Text>
            <Entypo 
              onPress={() => setTemperature(temperature + 1)}
              name="chevron-right"
              style={styles.tempIconView}
            />
          </View>

          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <Text style={styles.iconText}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ClimateScreen;

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Landing = props => {
  return (
    <View style={{}}>
      <ImageBackground
        source={require('../Assets/backgroundImagenew.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View
          style={{marginTop: '15%', backgroundColor: 'black', width: '100%'}}>
          <Text
            style={{
              fontSize: 55,
              fontWeight: 'bold',
              color: '#079A4B',
              textAlign: 'center',
            }}>
            Velocity
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginTop: '-2%',
              textAlign: 'center',
            }}>
            Happily Delivering Happinessss
          </Text>
        </View>
        <View
          style={{
            height: '35%',
            width: '35%',
            position: 'absolute',
            bottom: '-25%',
            left: '44%',
          }}>
          <TouchableOpacity
            style={{height: '30%', width: '38%', marginTop: '0%'}}
            onPress={() => props.navigation.navigate('Login')}>
            <Image
              source={require('../Assets/NextBtn.png')}
              style={{height: '100%', width: '108%', marginTop: '0%'}}></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    height: '100%',
  },
});

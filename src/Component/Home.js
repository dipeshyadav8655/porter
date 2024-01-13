import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Home(props) {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../Assets/backgroundImagenew.png')}
          style={styles.backgroundImage}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <View style={styles.welcomeTextContainer}>
              <Image
                source={require('../Assets/Logo.png')}
                style={{height: '50%', marginTop: '5%'}}></Image>
              {/* <Text style={styles.welcomeText}>Login or Signup </Text>
              <Text style={styles.welcomeText}>to Place an Order</Text> */}
            </View>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <Text style={{color: 'black', fontSize: 20}}>
                Enter Your Phone Number
              </Text>
              <View style={{marginTop: 50}}>
                <Text
                  style={{color: '#59BE75', marginBottom: 10, marginLeft: 10}}>
                  Phone Number
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:'#F4F4F4',
                    borderBottomWidth: 2,
                    borderBottomColor: '#59BE75',
                    paddingHorizontal:20,
                    borderRadius:16
                  }}>
                  <Image
                    source={require('../Assets/IndianFlag.png')}
                    style={{}}></Image>
                  <Text style={{color: 'black', marginLeft: 10}}>+91</Text>
                  <View
                    style={{
                      height: 30,
                      backgroundColor: '#59BE75',
                      width: 1,
                      marginHorizontal: 10,
                    }}></View>
                  <TextInput
                    placeholder="9876543210"
                    keyboardType="number-pad"
                    placeholderTextColor='gray'
                    maxLength={10}
                    style={{
                      width: '80%',
                      color:'green',
                      backgroundColor:'#F4F4F4',
                      borderRadius:16
                    }}></TextInput>
                </View>
              </View>
              <View style={{marginTop: 40, alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('OTP')}
                  style={{
                    alignItems: 'center',
                    backgroundColor: 'green',
                    padding: 10,
                    borderRadius: 20,
                    width: '80%',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    Get OTP
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#59BE75',
                    fontSize: 15,
                    fontWeight: 'normal',
                    marginTop: 12,
                  }}>
                  OTP will be sent to the Given Number
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // justifyContent:'flex-end',
    height: '100%',
  },
  welcomeTextContainer: {
    marginTop: '2%',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#079A4B',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

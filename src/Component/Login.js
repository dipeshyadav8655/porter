import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

export default function Login(props) {
    const [showPassword,SetShowPassword] = useState(false)
  return (
    <View>
      <ImageBackground
        source={require('../Assets/backgroundImagenew.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}>
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
              Happily Delivering Happiness
            </Text>
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
              <View>
                <Text
                  style={{color: '#59BE75', marginBottom: 10, marginLeft: 10}}>
                  Phone Number
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F4F4F4',
                    borderBottomWidth: 2,
                    borderBottomColor: '#59BE75',
                    paddingHorizontal: 20,
                    borderRadius: 16,
                  }}>
                  <TextInput
                    placeholder="9876543210"
                    keyboardType="number-pad"
                    placeholderTextColor='gray'
                    maxLength={10}
                    style={{
                      width: '80%',
                      color: 'green',
                      backgroundColor: '#F4F4F4',
                      borderRadius: 16,
                    }}></TextInput>
                </View>
              </View>
              <View style={{marginTop:10}}>
                <Text
                  style={{color: '#59BE75', marginBottom: 10, marginLeft: 10}}>
                  Password
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F4F4F4',
                    borderBottomWidth: 2,
                    borderBottomColor: '#59BE75',
                    paddingLeft: 20,
                    borderRadius: 16,
                  }}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor='gray'
                    keyboardType="default"
                    secureTextEntry={!showPassword}
                    minLength={8}
                    style={{
                      width: '80%',
                      color: 'green',
                      backgroundColor: '#F4F4F4',
                      borderRadius: 16,
                    }}></TextInput>
                    <Pressable onPress={()=>SetShowPassword(!showPassword)}>
                        <Text style={{color:'green'}}>{showPassword ? "Hide" : "show"}</Text>
                    </Pressable>
                </View>
              </View>
            </View>
            <View style={{marginTop: 40, alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 20,
                  width: '50%',
                }}>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
              <Text
                style={{
                  color: '#59BE75',
                  fontSize: 15,
                  fontWeight: 'normal',
                  marginTop: 12,
                }}>
                Signup
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    height: '100%',
  },
});

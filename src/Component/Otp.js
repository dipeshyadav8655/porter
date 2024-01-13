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
import React, { useEffect, useRef, useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function Otp(props) {

  const firstDigit = useRef();
  const secondDigit = useRef();
  const thiredDigit = useRef();
  const fourthDigit = useRef();
  const fifthDigit = useRef();
  const sixthDigit = useRef();
  const [otp1,setOtp1] = useState('');
  const [otp2,setOtp2] = useState('');
  const [otp3,setOtp3] = useState('');
  const [otp4,setOtp4] = useState('');
  const [otp5,setOtp5] = useState('');
  const [otp6,setOtp6] = useState('');
  const [timerEnded, setTimerEnded] = useState(false)

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);

    const {
      seconds,
      minutes,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {
      setTimerEnded(true)}
    });
  // useEffect(()=>{
    
  // })

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../Assets/backgroundImagenew.png')}
        style={styles.backgroundImage}>
            <Pressable style={{backgroundColor:'transparent'}} onPress={()=>props.navigation.goBack()}>
            <Text style={{color:'white',backgroundColor:'transparent',fontSize:20,fontWeight:'bold'}}>Back</Text>
        </Pressable>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <View style={styles.welcomeTextContainer}>
            <Image
              source={require('../Assets/Logo.png')}
              style={{height: '50%', marginTop: '0%'}}></Image>
            {/* <Text style={styles.welcomeText}>Login or Signup </Text>
          <Text style={styles.welcomeText}>to Place an Order</Text> */}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height:'50%',
              padding: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>Enter OTP</Text>
            <View style={{marginTop: 50}}>
              <Text
                style={{color: '#59BE75', marginBottom: 10, marginLeft: 10}}>
                OTP
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={firstDigit}
                  style={[{
                    width: '15%',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'gray',
                    borderColor : otp1 ? 'green' : 'gray',
                    borderWidth:2,
                    borderRadius: 16,
                  }]} onChangeText={txt=>{
                    if(txt.length==1){
                      setOtp1(txt);
                        secondDigit.current.focus()
                    }else{
                      setOtp1(txt)
                    }
                  }}></TextInput>

                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={secondDigit}
                  style={{
                    width: '15%',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'gray',
                    borderColor: otp2 ? 'green' : 'gray',
                    borderWidth:2,
                    borderRadius: 16,
                    marginLeft: 5,
                  }} onChangeText={txt=>{
                    if(txt.length==1){
                      setOtp2(txt)
                        thiredDigit.current.focus()
                    }else{
                      setOtp2(txt)
                      firstDigit.current.focus()
                    }
                  }}></TextInput>

                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={thiredDigit}
                  style={{
                    width: '15%',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'gray',
                    borderColor: otp3 ? 'green' : 'gray',
                    borderWidth:2,
                    borderRadius: 16,
                    marginLeft: 5,
                  }} onChangeText={txt=>{
                    if(txt.length==1){
                      setOtp3(txt)
                        fourthDigit.current.focus()
                    }else{
                      setOtp3(txt)
                      secondDigit.current.focus()
                    }
                  }}></TextInput>

                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fourthDigit}
                  style={{
                    width: '15%',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'gray',
                    borderColor: otp4 ? 'green' : 'gray',
                    borderWidth:2,
                    borderRadius: 16,
                    marginLeft: 5,
                  }} onChangeText={txt=>{
                    if(txt.length==1){
                      setOtp4(txt)
                        fifthDigit.current.focus()
                    }else{
                      setOtp4(txt)
                      thiredDigit.current.focus()
                    }
                  }}></TextInput>

                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fifthDigit}
                  style={{
                    width: '15%',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'gray',
                    borderColor: otp5 ? 'green' : 'gray',
                    borderWidth:2,
                    borderRadius: 16,
                    marginLeft: 5,
                  }} onChangeText={txt=>{
                    if(txt.length==1){
                      setOtp5(txt)
                        sixthDigit.current.focus()
                    }else{
                      setOtp5(txt)
                      fourthDigit.current.focus()
                    }
                  }}></TextInput>

                <TextInput
                  placeholder="0"
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={sixthDigit}
                  style={[{
                    width: '15%',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'gray',
                    borderColor: otp6 ? 'green' : 'gray',
                    borderWidth:2,
                    borderRadius: 16,
                    marginLeft: 5,
                  }]} onChangeText={txt=>{
                    if(txt.length==1){
                      setOtp6(txt)
                    }else{
                      setOtp6(txt)
                      fifthDigit.current.focus()
                    }
                  }}></TextInput>
              </View>
            </View>
            <View style={{marginTop: 40, alignItems: 'center'}}>
              <TouchableOpacity disabled={ otp1 && otp2 && otp3 && otp4 && otp5 && otp6 ? false : true}
                style={{
                  alignItems: 'center',
                  backgroundColor: otp1 && otp2 && otp3 && otp4 && otp5 && otp6 ? 'green' : 'gray',
                  padding: 10,
                  borderRadius: 20,
                  width: '80%',
                }}>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Verify
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#59BE75',
                  fontSize: 15,
                  fontWeight: 'normal',
                  marginTop: 12,
                  display: timerEnded ? 'none' :'flex',
                }}>
                OTP has been sent on 9874561230
              </Text>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop: 12,}}>
              <TouchableOpacity disabled={!timerEnded} onPress={()=>{
                  const expiryTimestamp = new Date();
                  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300); 
                  restart(expiryTimestamp);
                  setTimerEnded(false)
                }}>
              <Text style={{
                  color: timerEnded ? '#59BE75' : 'gray',
                  fontSize: 15,
                  fontWeight: 'normal',
                }}>
                Resend OTP
              </Text>
              </TouchableOpacity>
              <Text style={{
                  color: '#59BE75',
                  fontSize: 15,
                  fontWeight: 'normal',
                  marginLeft: 12,
                  display: timerEnded ? 'none' :'flex'
                }}>0{minutes} :</Text>
                <Text style={{
                  color: '#59BE75',
                  fontSize: 15,
                  fontWeight: 'normal',
                  display: timerEnded ? 'none' :'flex'
                }}>{seconds}</Text>
              </View>
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
    position:'relative',
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

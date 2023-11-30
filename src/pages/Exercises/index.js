import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import React, { useState,useRef } from 'react';
import Slider from '../../../components/Slider';
import { useNavigation } from "@react-navigation/native";
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';
import { fontType } from '../../theme';
import { Category } from 'iconsax-react-native';
const Exercises = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);
  return (
    <View>
<Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Animated.View style={{padding: 20,marginVertical: 10,borderRadius: 14,backgroundColor: 'white',marginHorizontal: 8,transform: [{translateY: recentY}]}}>
            <Text>Cari...</Text>
        </Animated.View>
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', gap: 10, marginTop: -6}}>
        <TouchableOpacity>
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Tipe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Peralatan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Otot</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Slider images={sliderImages} />
      <Slider images={sliderImages} />
    </Animated.ScrollView>
    <TouchableOpacity style={{padding: 20, position:'absolute', top: 630,right: 20, backgroundColor:'white',borderRadius: 20}} onPress={() => navigation.navigate("AddExercises")}>
        <Category size="18"  color="#2D2C2C" variant='Linear'/>
    </TouchableOpacity>
    </View>
  )
  }
export default Exercises
const styles = StyleSheet.create({})
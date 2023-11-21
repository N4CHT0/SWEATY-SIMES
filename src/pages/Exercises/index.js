import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import React, { useState,useRef } from 'react';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';
import { fontType } from '../../theme';

const Exercises = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);
  return (
    <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 1}}>
      <Animated.View style={{transform: [{translateY: recentY}]}}>
          <SearchBar/>
      </Animated.View>
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', gap: 10}}>
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
  )
  }
export default Exercises
const styles = StyleSheet.create({})
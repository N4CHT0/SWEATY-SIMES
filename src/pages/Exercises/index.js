import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';
import { fontType } from '../../theme';

const Exercises = () => {
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);
  return (
    <ScrollView>
      <SearchBar/>
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', gap: 20}}>
        <TouchableOpacity>
          <View style={{padding: 20, backgroundColor: 'white',borderRadius: 20}}>
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Tipe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 20, backgroundColor: 'white',borderRadius: 20}}>
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Peralatan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 20, backgroundColor: 'white',borderRadius: 20}}>
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Otot</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Slider images={sliderImages} />
      <Slider images={sliderImages} />
    </ScrollView>

  )
  }
export default Exercises
const styles = StyleSheet.create({})
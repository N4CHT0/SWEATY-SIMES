import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';
import HEADER from '../../assets/images/HEADER.jpg';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import Category from '../../../components/Category';
import { fontType } from '../../theme';
import { Discover, Global, Notification, Ticket, User } from 'iconsax-react-native';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);

  const handleSearch = (query) => {
    // Implement your search logic here and update searchResults state.
  };

  return (
    <ScrollView>
      <ImageBackground source={HEADER} style={{padding: 20, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontFamily: fontType['PRM-ExtraBold'], fontSize: 24, color: 'white'}}>Hello, Erik</Text>
            <TouchableOpacity>
              <View style={{marginLeft: 180, padding: 10, backgroundColor: 'white', borderRadius: 16}}>
                  <User size="28" color="#101010"/>
              </View>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',padding: 35, backgroundColor: 'white', borderRadius: 28, flexWrap: 'wrap', gap: 40, justifyContent: 'center',}}>
      <TouchableOpacity>
        <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
          <View style={{padding: 10, backgroundColor: '#D1FCFF', borderRadius: 10}}>
              <Discover size="28" color="#2ccce4"/>
          </View>
            <Text style={{fontFamily: fontType['PRM-Light']}}>Easy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
          <View style={{padding: 10, backgroundColor: '#D1FCFF', borderRadius: 10}}>
            <Ticket size="28" color="#2ccce4"/>
          </View>
            <Text style={{fontFamily: fontType['PRM-Light']}}>Medium</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection: 'column', alignItems: 'center', gap: 6}}>
        <View style={{padding: 10, backgroundColor: '#D1FCFF', borderRadius: 10}}>
            <Global size="28" color="#2ccce4"/>
          </View>
            <Text style={{fontFamily: fontType['PRM-Light']}}>Hard</Text>
        </View>
      </TouchableOpacity>
     </View>
      </ImageBackground>
     
     <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{fontFamily: fontType['PRM-Bold'], fontSize: 18}}>Recomendation</Text>
     </View>
     <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={{padding: 20, marginTop: -20, marginRight: -20}}>
              <Image style={{width: 200, height: 150, borderRadius: 20}} source={{uri:'https://www.realsimple.com/thmb/rEmEAm4vfx67IRbFgoVA0RzhTgI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/health-benefits-of-pushups-GettyImages-498315681-7008d40842444270868c88b516496884.jpg'}}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 20, marginTop: -20, marginRight: -20}}>
              <Image style={{width: 200, height: 150, borderRadius: 20}} source={{uri:'https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM2OTgxNjc1Nzc5NTg5/fullbodyprofilecoupleyoungtwofriendsstrongsportysportswoman.webp'}}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 20, marginTop: -20, marginRight: -20}}>
              <Image style={{width: 200, height: 150, borderRadius: 20}} source={{uri:'https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2022/04/Bagaimana-cara-melakukan-sit-up.jpg?w=620&ssl=1'}}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{padding: 20, marginTop: -20, marginRight: -20}}>
              <Image style={{width: 200, height: 150, borderRadius: 20}} source={{uri:'https://cdn0-production-images-kly.akamaized.net/zQd5hJVF1qOEBB5_slIOFnbwdzA=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3717550/original/029383200_1639645613-pexels-yaroslav-shuraev-8692269.jpg'}}></Image>
          </View>
        </TouchableOpacity>
      </ScrollView>
     </View>
     <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{fontFamily: fontType['PRM-Bold'], fontSize: 18}}>Your Activity</Text>
     </View>
     <View style={{marginBottom: 20, padding: 20, marginTop: -20}}>
      <Image style={{height: 180, width: 350, borderRadius: 18}} source={{uri: 'https://www.researchgate.net/profile/Husein-Husein-4/publication/345742831/figure/fig4/AS:956776824455170@1605124779561/A-line-chart-explains-the-amount-of-information-that-participants-have-on-parametric.jpg'}}></Image>
     </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.13,
    paddingHorizontal: 1,
    paddingTop: 18,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Home;

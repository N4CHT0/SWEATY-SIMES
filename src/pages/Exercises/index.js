import { ScrollView, StyleSheet, Text, TouchableOpacity,ActivityIndicator, View, Animated,RefreshControl } from 'react-native';
import React, { useState,useRef,useCallback,useEffect } from 'react';
import ExercisesItem from '../../../components/ExercisesItem';
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import { fontType } from '../../theme';
import { Category } from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore'; 
const Exercises = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    const [loading, setLoading] = useState(true);
    const [exercisesData, setExercisesData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
      const subscriber = firestore()
        .collection('exercises')
        .onSnapshot(querySnapshot => {
          const excersises = [];
          querySnapshot.forEach(documentSnapshot => {
            excersises.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setExercisesData(excersises);
          setLoading(false);
        });
      return () => subscriber();
    }, []);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        firestore()
          .collection('excersises')
          .onSnapshot(querySnapshot => {
            const excersises = [];
            querySnapshot.forEach(documentSnapshot => {
              excersises.push({
                ...documentSnapshot.data(),
                id: documentSnapshot.id,
              });
            });
            setExercisesData(exercisesData);
          });
        setRefreshing(false);
      }, 1500);
    }, []);
  return (
    <View>
    <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
      <View style={styles.container}>    
            <View style={styles.content}>
              {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                exercisesData.map((item, index) => <ExercisesItem item={item} key={index}/>)
              )}
            </View>
          </View>
    </Animated.ScrollView>
    <TouchableOpacity style={{padding: 20, position:'absolute', top: 630,right: 20, backgroundColor:'white',borderRadius: 20}} onPress={() => navigation.navigate("AddExercises")}>
        <Category size="18"  color="#2D2C2C" variant='Linear'/>
    </TouchableOpacity>
    </View>
  )
  }
export default Exercises
const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center'
  },
})
import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect, } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import axios from 'axios';
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
import FastImage from 'react-native-fast-image';
const EditExercises = ({route}) => {
    const {exercisesId} = route.params;
    const [exercisesData, setexercisesData] = useState({
        title: '',
        description: '',
        duration: '',
        totalLikes: 0,
        totalComments: 0,
      });
      const handleChange = (key, value) => {
        setexercisesData({
          ...exercisesData,
          [key]: value,
        });
      };
      const [image, setImage] = useState(null);
      const navigation = useNavigation();
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        getPostById();
      }, [exercisesId]);
    
      const getPostById = async () => {
        try {
          const response = await axios.get(
            `https://656c291ce1e03bfd572e06b1.mockapi.io/exercises/${exercisesId}`,
          );
          setexercisesData({
            title : response.data.title,
            description : response.data.description,
            duration : response.data.duration,
            image : response.data.image,
          })
        setImage(response.data.image)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      const handleUpdate = async () => {
        setLoading(true);
        try {
          await axios
            .put(`https://656c291ce1e03bfd572e06b1.mockapi.io/exercises/${exercisesId}`, {
              title: exercisesData.title,
              image,
              description: exercisesData.description,
              duration : exercisesData.duration,
              totalComments: exercisesData.totalComments,
              totalLikes: exercisesData.totalLikes,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Exercises');
        } catch (e) {
          console.log(e);
        }
      };
    return (
        <View style={{flex: 1,}}>
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
            <ScrollView>
                <TouchableOpacity>
                    <View style={{padding: 120, marginHorizontal: 30,marginVertical: 10}}>
                        <Image variant="Bold" color="#D1D1D1" size={'90'}/>
                    </View>
                </TouchableOpacity>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Nama Latihan"
                    value={exercisesData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Deskripsi Latihan"
                    value={exercisesData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Durasi."
                    value={exercisesData.duration}
                    onChangeText={(text) => handleChange("duration", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL."
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
            {loading && (
            <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="blue" />
            </View>
            )}
        </View>
    )
}
export default EditExercises
const styles = StyleSheet.create({
    image: {
      height: 250,
      width: 'auto',
      borderRadius: 10,
    },
    buttonUpload:{
        backgroundColor: '#3693F4',
        padding: 15, 
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 12, 
        marginHorizontal: 120, 
        borderRadius: 14, 
        position: 'absolute', 
        top: 670,
        left:192
    }
})
const textInput = StyleSheet.create({
    title:{
        fontSize: 14,
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})
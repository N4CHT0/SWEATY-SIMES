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
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import { Category, DirectboxSend, Image, Notification, SearchNormal1,Add,AddSquare } from 'iconsax-react-native'
import FastImage from "react-native-fast-image";
import { fontType } from "../../theme";
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
      const [oldImage, setOldImage] = useState(null);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const subscriber = firestore()
          .collection('exercises')
          .doc(exercisesId)
          .onSnapshot(documentSnapshot => {
            const exercisesData = documentSnapshot.data();
            if (exercisesData) {
              console.log('Exercises data: ', exercisesData);
              setexercisesData({
                title: exercisesData.title,
                description: exercisesData.description,
                duration: exercisesData.duration,
              });
              setOldImage(exercisesData.image);
              setImage(exercisesData.image);
              setLoading(false);
            } else {
              console.log(`Excercises with ID ${exercisesId} not found.`);
            }
          });
        setLoading(false);
        return () => subscriber();
      }, [exercisesId]);
    
      const handleImagePick = async () => {
        ImagePicker.openPicker({
          width: 1920,
          height: 1080,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            setImage(image.path);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`blogimages/${filename}`);
        try {
          if (image !== oldImage && oldImage) {
            const oldImageRef = storage().refFromURL(oldImage);
            await oldImageRef.delete();
          }
          if (image !== oldImage) {
            await reference.putFile(image);
          }
          const url =
            image !== oldImage ? await reference.getDownloadURL() : oldImage;
          await firestore().collection('blog').doc(blogId).update({
            title: exercisesData.title,
            category: exercisesData.description,
            image: url,
            duration: exercisesData.duration,
          });
          setLoading(false);
          console.log('Excercises Updated!');
          navigation.navigate('Excercises', {exercisesId});
        } catch (error) {
          console.log(error);
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
            {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'blue',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color="white"
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color="gray" variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['PRM-Medium'],
                  fontSize: 12,
                  color: "gray",
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
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
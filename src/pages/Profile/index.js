import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Setting2 } from 'iconsax-react-native';

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileBar}>
        <View  style={styles.profileImage}>
            <Text>ER</Text>
        </View>

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>M. Eri Kusyairi</Text>
          <View style={styles.badgeContainer}>

        <TouchableOpacity>
          <View style={styles.profileBadge}>
              <Text style={styles.titleBadge}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        
        
       </View>

      </View>
       </View>

       <Text style={{marginVertical: 10, fontWeight: 'bold', fontSize: 20, marginLeft: 10,}}>Pengaturan</Text>

      <View style={styles.profileBar}>
        

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Pegaturan menu</Text>
          <View style={styles.badgeContainer}>

        
        
        
       </View>

      </View>
       </View>

      <View style={styles.profileBar}>
        

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Pengaturan Home</Text>
          <View style={styles.badgeContainer}>

        
        
        
       </View>

      </View>
       </View>
       
      <View style={styles.profileBar}>
        

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Pengaturan Jadwal</Text>
          <View style={styles.badgeContainer}>

        
        
        
       </View>

      </View>
       </View>
      <View style={styles.profileBar}>
        

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Pengaturan Time</Text>
          <View style={styles.badgeContainer}>

        
        
        
       </View>

      </View>
       </View>
       <Text style={{marginTop: 25, marginBottom: 10, fontWeight: 'bold', fontSize: 20, marginLeft: 10,}}>Bantuan</Text>
       <View style={styles.profileBar}>
        

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Pusat Bantuan</Text>
          <View style={styles.badgeContainer}>

        
        
        
       </View>

      </View>
       </View>
      <View style={styles.profileBar}>
        

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Bantuan Kami</Text>
          <View style={styles.badgeContainer}>

        
        
        
       </View>

      </View>
       </View>

      <View style={styles.statusProfile}>
        
        <View style={styles.statusFollow}>
          <Text style={styles.statusText}>Copyright</Text>
          <Text style={styles.profileValue}>@Erik</Text>
        </View>

      </View>

      <View style={events.container}>
            
            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>

            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>

            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>

            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>
            
            
          </View>

    </ScrollView>
    
  )
}

export default Profile

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00FFFF',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 30,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 10,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileBar: {
    marginVertical: 2,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profileName: {
    marginVertical: 10,
  },
  profileBadge: {
    marginHorizontal: 4,
    borderRadius: 40,
    alignContent: 'center',
    backgroundColor: 'white'
  },
  titleBadge: {
    marginHorizontal:15,
    marginVertical: 10,
    fontFamily: 'SquadaOne-Regular',
    fontSize: 16,
  },
  profileTitle: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: 'SquadaOne-Regular'
  },
  iconGear: {
    marginHorizontal: 4,
  },
  badgeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  statusText: {
    fontFamily: 'SquadaOne-Regular',
    marginHorizontal: 14,
  }, 
  statusProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 15,
  },
  statusFollow: {
    flexDirection: 'column',
    marginTop: 50
  },
  profileValue: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    textAlign: 'center'
  },
  profileImage: {
    padding: 24,
    marginHorizontal: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 1,
  }
})

const events = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
})
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addStatus } from './statusService'; // Assuming the status service is implemented separately

const add_status = () => {
  const [status, setStatus] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async (source) => {
    try {
      const { uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        source: source === 'camera' ? ImagePicker.launchCameraAsync() : ImagePicker.launchImageLibraryAsync(),
      });

      if (!uri.cancelled) {
        setProfileImage(uri);
      }
    } catch (error) {
      console.log('ImagePicker Error:', error);
    }
  };

  const handleAddStatus = () => {
    addStatus(status, profileImage || '')
      .then(() => {
        alert('Durum eklendi!');
        // Perform navigation or any additional logic here
      })
      .catch((error) => {
        console.log('Add Status Error:', error);
      });
  };

  const renderImagePlace = () => {
    const height = Dimensions.get('window').height;
    if (profileImage) {
      return (
        <Image
          source={{ uri: profileImage }}
          style={{ width: height * 0.16, height: height * 0.16, borderRadius: height * 0.08 }}
        />
      );
    } else {
      return (
        <Image
          source={require('./assets/images/siyah.png')}
          style={{ width: height * 0.16, height: height * 0.16, borderRadius: height * 0.08 }}
        />
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 2, borderColor: 'blue', borderRadius: 10, padding: 8 }}>
        <TextInput
          value={status}
          onChangeText={setStatus}
          multiline={true}
          placeholder="Bir şeyler yazın..."
          style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: 'white' }}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{renderImagePlace()}</View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => pickImage('camera')}>
            <Image source={require('./assets/icons/camera.png')} style={{ width: 30, height: 30, tintColor: 'blue' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pickImage('gallery')} style={{ marginLeft: 10 }}>
            <Image source={require('./assets/icons/image.png')} style={{ width: 30, height: 30, tintColor: 'blue' }} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleAddStatus}
        style={{
          paddingVertical: 5,
          borderWidth: 2,
          borderColor: 'blue',
          borderRadius: 30,
          alignItems: 'center',
          marginHorizontal: 8,
          marginBottom: 25,
        }}
      >
        <Text style={{ color: 'blue', fontSize: 20 }}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default add_status;

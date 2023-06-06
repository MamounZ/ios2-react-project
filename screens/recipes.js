import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Drawer, IconButton } from 'react-native-paper';
import { launch } from 'react-native-url-launcher';

const recipes = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAddButton = () => {
    if (Rglobals.Name === 'Risotto') {
      globals.isVisible5 = true;
    } else if (Rglobals.Name === 'Pasta') {
      globals.isVisible6 = true;
    } else if (Rglobals.Name === 'Calzone') {
      globals.isVisible7 = true;
    } else if (Rglobals.Name === 'Pizza') {
      globals.isVisible8 = true;
    } else if (Rglobals.Name === 'Almondine') {
      globals.isVisible1 = true;
    } else if (Rglobals.Name === 'Ambrosia Salad') {
      globals.isVisible2 = true;
    } else if (Rglobals.Name === 'Meringue') {
      globals.isVisible3 = true;
    } else if (Rglobals.Name === 'Roasted Fennel') {
      globals.isVisible4 = true;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section>
        <NavigationDrawer />
      </Drawer.Section>
      <FloatingActionButton onPress={handleAddButton} />
      <ScrollView>
        <View style={{ backgroundColor: '#E1DEDE' }}>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Image source={require('./assets/a.png')} />
          </View>
          <View style={{ padding: 10 }}>
            <Image
              source={{ uri: Rglobals.Photo }}
              style={{ height: 150, width: 75 }}
            />
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 50,
                fontStyle: 'italic',
              }}
            >
              {Rglobals.Name}
            </Text>
          </View>
          <View style={{ padding: 10, height: 330 }}>
            <ScrollView vertical>
              <Text style={{ fontSize: 15 }}>{Rglobals.Recipe}</Text>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const NavigationDrawer = () => (
  <Drawer>
    <Drawer.Section>
      <View>
        <View style={{ paddingTop: 30 }}></View>
      </View>
    </Drawer.Section>
    <Drawer.Section>
      <View>
        <Drawer.Item
          icon="home-outline"
          label="Home"
          onPress={() => {
            // Navigate to '/HomePage'
          }}
        />
        <Drawer.Item
          icon="favorite"
          label="Favorite"
          onPress={() => {
            // Navigate to '/favorite'
          }}
        />
        <Drawer.Item
          icon="web"
          label="Visit Website"
          onPress={async () => {
            await launch('https://www.youtube.com/shorts/Dk_j0f-HhaI');
          }}
        />
      </View>
    </Drawer.Section>
  </Drawer>
);

const FloatingActionButton = ({ onPress }) => (
  <View>
    <IconButton icon="add" onPress={onPress} />
  </View>
);

export default recipes;

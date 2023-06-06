import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { launch } from 'react-native-url-launcher';
import NavigationDrawer from './NavigationDrawer';
import * as Rglobals from './Rglobals'; // Assuming Rglobals.js file is present

class asian extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationDrawer />
        <ScrollView>
          <View style={{ width: '100%', height: 800, backgroundColor: '#E1DEDE' }}>
            <ScrollView>
              <View style={{ alignItems: 'center', padding: 10 }}>
                <Image source={require('./assets/a.png')} />
              </View>
              <View style={{ marginVertical: 20, height: 40, flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity style={{ width: 160 }} onPress={() => this.props.navigation.navigate('/western')}>
                    <Text>Italian</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 160 }} onPress={() => this.props.navigation.navigate('/french')}>
                    <Text>French</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 160 }} onPress={() => this.props.navigation.navigate('/western')}>
                    <Text>Spanish</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 160 }} onPress={() => this.props.navigation.navigate('/western')}>
                    <Text>Greek</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                  Rglobals.Name = 'Risotto';
                  Rglobals.Recipe =
                    'A classic risotto alla Milanese starts with mashed saffron threads, fried in butter. When the saffron has released some of its flavour, add finely chopped onion. Add the rice and cook until the grains become translucent. Next, a splash of white wine. The heat may be slightly raised, and stir to keep the rice moist and simmering. As soon as the rice grains have absorbed the wine, gradually add tablespoons of chicken stock or beef stock and continue to heat until the rice is cooked. For an authentic risotto, it is vital that the stock is not added all at once. Finally, add butter and Parmesan cheese, allowing it to spread through the rice. Then let it rest for a few minutes, a step called mantecare.';
                    Rglobals.Photo = 'assets/risotto.jpg';
this.props.navigation.navigate('/recipes');
}}
>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Image source={require('./assets/risotto.jpg')} style={{ width: 200, height: 120 }} />
  <Text style={{ marginLeft: 50 }}>Risotto</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
style={{ padding: 10 }}
onPress={() => {
  Rglobals.Name = 'Pasta';
  Rglobals.Recipe =
    'Cook the pasta for 2 mins less than pack instructions state, in salted boiling water. Meanwhile, melt the butter in a medium frying pan over a low heat, then add the ground black pepper and toast for a few minutes.Drain the pasta, keeping 200ml of the pasta water. Tip the pasta and 100ml of the pasta water into the pan with the butter and pepper. Toss briefly, then scatter over the parmesan evenly, but don’t stir – wait for the cheese to melt for 30 seconds, then once melted, toss everything well, and stir together. This prevents the cheese from clumping or going stringy and makes a smooth, shiny sauce. Add a splash more pasta water if you need to, to loosen the sauce and coat the pasta. Serve immediately with a good grating of black pepper.';
  Rglobals.Photo = 'assets/pasta.jpg';
  this.props.navigation.navigate('/recipes');
}}
>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Image source={require('./assets/pasta.jpg')} style={{ width: 200, height: 120 }} />
  <Text style={{ marginLeft: 50 }}>Pasta</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
style={{ padding: 10 }}
onPress={() => {
  Rglobals.Name = 'Calzone';
  Rglobals.Recipe =
    'Preheat oven to 500° and grease two large baking sheets with cooking spray. Divide pizza dough into 4 pieces. On a lightly floured surface, roll one piece of dough out into an 8 circle, about ¼ thick. Spoon pizza sauce in middle of dough, then dot with ricotta and top with pepperoni and mozzarella.Gently fold dough in half, dampen seams with water and pinch together, then crimp edges all around. Repeat with remaining dough. Transfer to prepared baking sheets. Brush tops with oil and sprinkle with salt. Using kitchen scissors or a sharp knife, slit tops in 2 to 3 spots to create steam vents.Bake until tops are golden and filling is bubbling, 20 minutes, brushing with more oil halfway through. Let cool 5 minutes before cutting open.';
  Rglobals.Photo = 'assets/calzone.jpg';
  this.props.navigation.navigate('/recipes');
}}
>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Image source={require('./assets/calzone.jpg')} style={{ width: 200, height: 120 }} />
  <Text style={{ marginLeft: 50 }}>Calzone</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
style={{ padding: 10 }}
onPress={() => {
  Rglobals.Name = 'Pizza';
  Rglobals.Recipe =
    'First, make the dough. Tip the flour into a bowl and add 300ml tepid water. Mix together and set aside at room temperature for 1 hr. Dissolve the yeast in 2 tbsp water and mix this and 15g of salt through the dough. Cover with cling film and leave somewhere warm to double in size for a few hours. For a thin crust, push down firmly and quickly with your fingers to knock out the air. For a deep-pan crust, knock out the air by kneading gently. Roll out on a floured surface or stretch with your fingers to fill a greased 40cm round pizza pan. Allow the dough to rise for 15-20 minutes. Add toppings of your choice, then bake in a hot oven (240C/gas 9) for 15-20 minutes. Allow to cool a little before slicing and serving.';
  Rglobals.Photo = 'assets/pizza.jpg';
  this.props.navigation.navigate('/recipes');
}}
>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Image source={require('./assets/pizza.jpg')} style={{ width: 200, height: 120 }} />
  <Text style={{ marginLeft: 50 }}>Pizza</Text>
</View>
</TouchableOpacity>
</ScrollView>
</View>
</ScrollView>
</View>
);
}
}

export default asian;


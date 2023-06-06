import React from 'react';
import { Link } from 'react-router-dom';

import NavigationDrawer from './NavigationDrawer';
import * as Rglobals from './Rglobals';

class Westren extends React.Component {
  render() {
    return (
      <div>
        <NavigationDrawer />
        <div style={{ width: '100%', height: '800px', backgroundColor: '#E1DEDE' }}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <img src="assets/a.png" alt="Logo" />
          </div>
          <div style={{ margin: '20px 0', height: '40px', display: 'flex', overflowX: 'auto' }}>
            <button style={{ width: '160px' }} onClick={() => {}}>
              Italian
            </button>
            <button style={{ width: '160px' }} onClick={() => {}}>
              French
            </button>
            <button style={{ width: '160px' }} onClick={() => {}}>
              Spanish
            </button>
            <button style={{ width: '160px' }} onClick={() => {}}>
              Greek
            </button>
          </div>
          <div style={{ padding: '10px' }}>
            <div
              style={{
                backgroundColor: '#B4B4B4',
                borderRadius: '20px',
                display: 'flex',
                padding: '10px',
                margin: '10px 0',
              }}
              onClick={() => {
                Rglobals.Name = 'Risotto';
                Rglobals.Recipe =
                  'A classic risotto alla Milanese starts with mashed saffron threads, fried in butter. When the saffron has released some of its flavour, add finely chopped onion. Add the rice and cook until the grains become translucent. Next, a splash of white wine. The heat may be slightly raised, and stir to keep the rice moist and simmering. As soon as the rice grains have absorbed the wine, gradually add tablespoons of chicken stock or beef stock and continue to heat until the rice is cooked. For an authentic risotto, it is vital that the stock is not added all at once. Finally, add butter and Parmesan cheese, allowing it to spread through the rice. Then let it rest for a few minutes, a step called mantecare.';
                Rglobals.Photo = 'assets/risotto.jpg';
              }}
            >
              <img src="assets/risotto.jpg" alt="Risotto" style={{ width: '200px', height: '120px' }} />
              <div style={{ marginLeft: '50px' }}>Risotto</div>
            </div>
            <div
              style={{
                backgroundColor: '#B4B4B4',
                borderRadius: '20px',
                display: 'flex',
                padding: '10px',
                margin: '10px 0',
              }}
              onClick={() => {
                Rglobals.Name = 'Pasta';
                Rglobals.Recipe =
                  'Cook the pasta for 2 mins less than pack instructions state, in salted boiling water. Meanwhile, melt the butter in a medium frying pan over a low heat, then add the ground black pepper and toast for a few minutes.Drain the pasta, keeping 200ml of the pasta water. Tip the pasta and 100ml of the pasta water into the pan with the butter and pepper. Toss briefly, then scatter over the parmesan evenly, but don’t stir – wait for the cheese to melt for 30 seconds, then once melted, toss everything well, and stir together. This prevents the cheese from clumping or going stringy and makes a smooth, shiny sauce. Add a splash more pasta water if you need to, to loosen the sauce and coat the pasta. Serve immediately with a good grating of black pepper.';
                Rglobals.Photo = 'assets/pasta.jpg';
              }}
            >
              <img src="assets/pasta.jpg" alt="Pasta" style={{ width: '200px', height: '120px' }} />
              <div style={{ marginLeft: '50px' }}>Pasta</div>
            </div>
            <div
              style={{
                backgroundColor: '#B4B4B4',
                borderRadius: '20px',
                display: 'flex',
                padding: '10px',
                margin: '10px 0',
              }}
              onClick={() => {
                Rglobals.Name = 'Calzone';
                Rglobals.Recipe =
                  'Preheat oven to 500° and grease two large baking sheets with cooking spray. Divide pizza dough into 4 pieces. On a lightly floured surface, roll one piece of dough out into an 8 circle, about ¼ thick. Spoon pizza sauce in middle of dough, then dot with ricotta and top with pepperoni and mozzarella.Gently fold dough in half, dampen seams with water and pinch together, then crimp edges all around. Repeat with remaining dough. Transfer to prepared baking sheets. Brush tops with oil and sprinkle with salt. Using kitchen scissors or a sharp knife, slit tops in 2 to 3 spots to create steam vents.Bake until tops are golden and filling is bubbling, 20 minutes, brushing with more oil halfway through. Let cool 5 minutes before cutting open.';
                Rglobals.Photo = 'assets/calzone.jpg';
              }}
            >
              <img src="assets/calzone.jpg" alt="Calzone" style={{ width: '200px', height: '120px' }} />
              <div style={{ marginLeft: '50px' }}>Calzone</div>
            </div>
            <div
              style={{
                backgroundColor: '#B4B4B4',
                borderRadius: '20px',
                display: 'flex',
                padding: '10px',
                margin: '10px 0',
              }}
              onClick={() => {
                Rglobals.Name = 'Pizza';
                Rglobals.Recipe =
                  'First, make the dough. Tip the flour into a bowl and add 300ml tepid water. Mix together and set aside at room temperature for 1 hr. Dissolve the yeast in 2 tbsp water and mix this and 15g of salt through the dough. Cover with cling film and leave somewhere warm to double in size for a few hours. For a sourer flavour, leave in the fridge for at least 8 hrs and up to 24 hrs – the longer you leave it the sourer it will be.When the dough is ready, tip it onto a lightly floured surface and divide into four. Roll into balls and leave to rest, covered with a tea towel or cling film for another hour.Now make the tomato sauce. Drain some of the juice from the can and tip the rest into a bowl with the olive oil, oregano and a generous pinch of salt, then either scrunch everything together with your fingers for a chunky sauce or blitz with a stick blender if you want it smooth. Tie the basil stalks together, bruise with the back of a knife and place in the sauce. Leave the sauce at room temperature until needed.To make the pizza, heat a grill to its highest setting and get a heavy frying pan. On a floured surface push and stretch one of the balls of dough out into a circle roughly the same size as the frying pan. Slip the round onto a floured baking sheet and top with a quarter of the sauce, a scattering of cheese, a few basil leaves and a quarter of the mozzarella.Get the pan very hot and carefully slide the pizza onto it. Cook for 2 mins, then put the pan under the grill for another 2 mins until the sides are puffed up and the cheese has melted. Lift onto a board, drizzle with a little olive oil if you like, then cut into wedges and serve while you make the next one.';
                Rglobals.Photo = 'assets/pizza.webp';
              }}
            >
              <img src="assets/pizza.webp" alt="Pizza" style={{ width: '200px', height: '120px' }} />
              <div style={{ marginLeft: '50px' }}>Pizza</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class NavigationDrawer extends React.Component {
  render() {
    return (
      <div>
        <div>Logo/Image Here</div>
        <div>
          <ul>
            <li>
              <a href="/HomePage">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/favorite">
                <span>Favorite</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/shorts/Dk_j0f-HhaI">
                <span>Visit Website</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default westren;

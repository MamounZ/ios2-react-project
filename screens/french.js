import React from 'react';
import { Link } from 'react-router-dom';

class french extends React.Component {
  render() {
    return (
      <div>
        <NavigationDrawer />
        <div>
          <Container>
            <div style={{ width: '100%', height: 800, background: '#E1DEDE' }}>
              <div>
                <div style={{ textAlign: 'center', padding: 10 }}>
                  <img src="assets/a.png" alt="" />
                </div>
              </div>

              <div style={{ margin: '20px 0' }}>
                <div style={{ display: 'flex', overflowX: 'auto' }}>
                  <div style={{ width: 160 }}>
                    <Link to="/western">
                      <button style={{ width: '100%' }}>Italian</button>
                    </Link>
                  </div>
                  <div style={{ width: 160 }}>
                    <Link to="/french">
                      <button style={{ width: '100%' }}>French</button>
                    </Link>
                  </div>
                  <div style={{ width: 160 }}>
                    <Link to="/western">
                      <button style={{ width: '100%' }}>Spanish</button>
                    </Link>
                  </div>
                  <div style={{ width: 160 }}>
                    <Link to="/western">
                      <button style={{ width: '100%' }}>Greek</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Almondine';
                    Rglobals.Recipe = "Bring a large pot of salted water to a boil. Meanwhile, prep an ice bath by filling a large bowl with ice and water. Cook green beans until crisp-tender, 2 to 3 minutes (you want them to be slightly undercooked as they will continue to cook later). Using a slotted spoon, immediately transfer beans to ice bath. Drain.In large skillet over medium-low heat, melt butter until lightly bubbling. Add almonds and cook, stirring frequently, until golden brown, 3 to 4 minutes. Reduce heat to low and add shallots and garlic. Cook, stirring occasionally, until fragrant, 2 to 3 minutes. Add green beans and toss until combined and beans are tender. Stir in lemon zest and juice, tossing to coat; season with salt and pepper.";
                    Rglobals.Photo = 'assets/almondine.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/almondine.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Almondine</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Ambrosia Salad';
                    Rglobals.Recipe = "In a large bowl, fold together Cool Whip and sour cream. Add oranges, pineapple, cherries, coconut, pecans, and marshmallows and stir gently.Cover and refrigerate for at least 1 hour and up to overnight. ";
                    Rglobals.Photo = 'assets/ambrosia salad.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/ambrosia salad.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Ambrosia Salad</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Meringue';
                    Rglobals.Recipe = "Preheat oven to 200°. Line two sheet pans with parchment paper.In bowl of a stand mixer fitted with a whisk attachment, combine egg whites, cream of tartar, and salt. Beat on medium speed until whites are foamy and soft peaks form, about 1 minute. With mixer running, slowly add sugar 1 tablespoon at a time, then increase speed to high and beat until meringue is thick, marshmallow-like, and holds firm peaks, 4 to 6 minutes. Beat in peppermint extract.Fit a large disposable piping bag with a large tip and fold top back to create a cuff. Using a small paint brush, paint a few thin vertical stripes of red food coloring inside bag. Rest bag in an empty drinking glass to prop it up, then use a rubber spatula to scrape meringue into piping bag. Fold back top of bag and twist top to seal.Pipe 2” cookies on prepared sheet pans, leaving 1” between cookies. Bake until cookies are very crisp and hard to the touch, 1½ to 2 hours. Turn off oven and let cookies sit in oven until completely cool, about 2 hours.Place peppermints in bowl of a mini food processor. Pulse until candy is broken up into fine pieces. (Alternatively, place them in a small ziptop bag and crush with a meat mallet or rolling pin.) Transfer to a small bowl.In a small microwave-safe bowl, microwave chocolate chips in 30-second intervals, stirring between each, until melted and smooth.Working with one cookie at a time, dip bottom of meringue in chocolate and let excess drip off. Sprinkle some crushed peppermints over chocolate and return immediately back to baking sheet. Repeat with remaining cookies, then refrigerate until chocolate is set, 15 to 20 minutes. Store in an airtight container.";
                    Rglobals.Photo = 'assets/Meringue.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/Meringue.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Meringue</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Roasted Fennel';
                    Rglobals.Recipe = "Preheat oven to 400º. In a small bowl, combine shallot, vinegar, and 1/2 teaspoon salt. Let sit, stirring occasionally, while vegetables roast.On a large rimmed baking sheet, toss fennel, squash, apple, oil, 1 teaspoon salt, and 1/2 teaspoon pepper with your hands. Transfer some of the fennel mixture to another baking sheet so vegetables are in an even layer.Roast vegetables, rotating pans halfway through, until golden brown and tender, 35 to 45 minutes.Transfer vegetables to a platter. Top with pickled shallots, hazelnuts, pomegranate seeds, and parsley.";
                    Rglobals.Photo = 'assets/roasted fennel.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/roasted fennel.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Roasted Fennel</div>
                    </div>
                  </div>
                </div>
              </div>


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
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}></div>
        <div>
          <div>
            <div>
              <div onClick={() => this.props.history.push('/HomePage')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ marginRight: '16px' }}><HomeOutlinedIcon /></div>
                <div>Home</div>
              </div>
            </div>
            <div>
              <div onClick={() => this.props.history.push('/favorite')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ marginRight: '16px' }}><FavoriteIcon /></div>
                <div>Favorite</div>
              </div>
            </div>
            <div>
              <div onClick={() => window.open('https://www.youtube.com/shorts/Dk_j0f-HhaI', '_blank')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ marginRight: '16px' }}><WebIcon /></div>
                <div>Visit Website</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class french extends React.Component {
  render() {
    return (
      <div>
        <NavigationDrawer history={this.props.history} />
        <div style={{ padding: '16px' }}>
          <div style={{ width: '100%', height: 800, backgroundColor: '#E1DEDE', borderRadius: 4 }}>
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <img src="assets/a.png" alt="" style={{ alignSelf: 'center' }} />
              </div>

              <div style={{ margin: '20px 0', height: 40, overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <div style={{ width: 160 }}>
                  <button onClick={() => this.props.history.push('/western')}>Italian</button>
                </div>
                <div style={{ width: 160 }}>
                  <button onClick={() => this.props.history.push('/french')}>French</button>
                </div>
                <div style={{ width: 160 }}>
                  <button onClick={() => this.props.history.push('/western')}>Spanish</button>
                </div>
                <div style={{ width: 160 }}>
                  <button onClick={() => this.props.history.push('/western')}>Greek</button>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Almondine';
                    Rglobals.Recipe = "Bring a large pot of salted water to a boil. Meanwhile, prep an ice bath by filling a large bowl with ice and water. Cook green beans until crisp-tender, 2 to 3 minutes (you want them to be slightly undercooked as they will continue to cook later). Using a slotted spoon, immediately transfer beans to ice bath. Drain.In large skillet over medium-low heat, melt butter until lightly bubbling. Add almonds and cook, stirring frequently, until golden brown, 3 to 4 minutes. Reduce heat to low and add shallots and garlic. Cook, stirring occasionally, until fragrant, 2 to 3 minutes. Add green beans and toss until combined and beans are tender. Stir in lemon zest and juice, tossing to coat; season with salt and pepper.";
                    Rglobals.Photo = 'assets/almondine.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/almondine.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Almondine</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Ambrosia Salad';
                    Rglobals.Recipe = "In a large bowl, fold together Cool Whip and sour cream. Add oranges, pineapple, cherries, coconut, pecans, and marshmallows and stir gently.Cover and refrigerate for at least 1 hour and up to overnight. ";
                    Rglobals.Photo = 'assets/ambrosia salad.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/ambrosia salad.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Ambrosia Salad</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Meringue';
                    Rglobals.Recipe = "Preheat oven to 200°. Line two sheet pans with parchment paper.In bowl of a stand mixer fitted with a whisk attachment, combine egg whites, cream of tartar, and salt. Beat on medium speed until whites are foamy and soft peaks form, about 1 minute. With mixer running, slowly add sugar 1 tablespoon at a time, then increase speed to high and beat until meringue is thick, marshmallow-like, and holds firm peaks, 4 to 6 minutes. Beat in peppermint extract.Fit a large disposable piping bag with a large tip and fold top back to create a cuff. Using a small paint brush, paint a few thin vertical stripes of red food coloring inside bag. Rest bag in an empty drinking glass to prop it up, then use a rubber spatula to scrape meringue into piping bag. Fold back top of bag and twist top to seal.Pipe 2” cookies on prepared sheet pans, leaving 1” between cookies. Bake until cookies are very crisp and hard to the touch, 1½ to 2 hours. Turn off oven and let cookies sit in oven until completely cool, about 2 hours.Place peppermints in bowl of a mini food processor. Pulse until candy is broken up into fine pieces. (Alternatively, place them in a small ziptop bag and crush with a meat mallet or rolling pin.) Transfer to a small bowl.In a small microwave-safe bowl, microwave chocolate chips in 30-second intervals, stirring between each, until melted and smooth.Working with one cookie at a time, dip bottom of meringue in chocolate and let excess drip off. Sprinkle some crushed peppermints over chocolate and return immediately back to baking sheet. Repeat with remaining cookies, then refrigerate until chocolate is set, 15 to 20 minutes. Store in an airtight container.";
                    Rglobals.Photo = 'assets/Meringue.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/Meringue.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Meringue</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <div style={{ backgroundColor: '#B4B4B4', elevation: 10, borderRadius: 20 }}>
                  <div onClick={() => {
                    Rglobals.Name = 'Roasted Fennel';
                    Rglobals.Recipe = "Preheat oven to 400º. In a small bowl, combine shallot, vinegar, and 1/2 teaspoon salt. Let sit, stirring occasionally, while vegetables roast.On a large rimmed baking sheet, toss fennel, squash, apple, oil, 1 teaspoon salt, and 1/2 teaspoon pepper with your hands. Transfer some of the fennel mixture to another baking sheet so vegetables are in an even layer.Roast vegetables, rotating pans halfway through, until golden brown and tender, 35 to 45 minutes.Transfer vegetables to a platter. Top with pickled shallots, hazelnuts, pomegranate seeds, and parsley.";
                    Rglobals.Photo = 'assets/roasted fennel.jpg';
                    this.props.history.push('/recipes');
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/roasted fennel.jpg" alt="" style={{ width: 200, height: 120, objectFit: 'cover' }} />
                      <div style={{ marginLeft: 50 }}>Roasted Fennel</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

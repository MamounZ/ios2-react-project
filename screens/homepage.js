import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavigationDrawer />
        <div>
          <div
            style={{
              width: '100%',
              height: '800px',
              backgroundColor: '#E1DEDE',
              borderRadius: '0px',
            }}
          >
            <div style={{ padding: '10px', textAlign: 'center' }}>
              <img src="assets/a.png" alt="" />
            </div>

            <div style={{ padding: '12px' }}>
              <div
                style={{
                  backgroundColor: '#B4B4B4',
                  elevation: '10px',
                  borderRadius: '20px',
                }}
              >
                <Link to="/western">
                  <div style={{ display: 'flex' }}>
                    <img
                      src="assets/westernfood.jpg"
                      alt=""
                      style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                    />
                    <div style={{ width: '50px' }}></div>
                    <div>Western Food</div>
                  </div>
                </Link>
              </div>
            </div>

            <div style={{ padding: '12px' }}>
              <div
                style={{
                  backgroundColor: '#B4B4B4',
                  elevation: '10px',
                  borderRadius: '20px',
                }}
              >
                <Link to="/asian">
                  <div style={{ display: 'flex' }}>
                    <img
                      src="assets/aisanfood.jpg"
                      alt=""
                      style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                    />
                    <div style={{ width: '50px' }}></div>
                    <div>Asian Food</div>
                  </div>
                </Link>
              </div>
            </div>

            <div style={{ padding: '12px' }}>
              <div
                style={{
                  backgroundColor: '#B4B4B4',
                  elevation: '10px',
                  borderRadius: '20px',
                }}
              >
                <Link to="/middleeastern">
                  <div style={{ display: 'flex' }}>
                    <img
                      src="assets/middleeasternfood.jpg"
                      alt=""
                      style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                    />
                    <div style={{ width: '40px' }}></div>
                    <div>Middle Eastern Food</div>
                  </div>
                </Link>
              </div>
            </div>

            <div style={{ padding: '12px' }}>
              <div
                style={{
                  backgroundColor: '#B4B4B4',
                  elevation: '10px',
                  borderRadius: '20px',
                }}
              >
                <Link to="/african">
                  <div style={{ display: 'flex' }}>
                    <img
                      src="assets/africanfood.jpg"
                      alt=""
                      style ={{ display: 'flex' }}>
                      <img
                        src="assets/africanfood.jpg"
                        alt=""
                        style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                      />
                      <div style={{ width: '50px' }}></div>
                      <div>African Food</div>
                    </div>
                  </Link>
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
        <div>{/* Header content goes here */}</div>
        <div>
          <ul>
            <li>
              <Link to="/HomePage">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/favorite">
                <span>Favorite</span>
              </Link>
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

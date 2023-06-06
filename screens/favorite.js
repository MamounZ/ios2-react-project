import React, { useState } from 'react';
import recipes from './recipes';

const favorite = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);
  const [isVisible5, setIsVisible5] = useState(true);
  const [isVisible6, setIsVisible6] = useState(true);
  const [isVisible7, setIsVisible7] = useState(true);
  const [isVisible8, setIsVisible8] = useState(true);

  const handleDelete1 = () => {
    setIsVisible1(false);
  };

  const handleDelete2 = () => {
    setIsVisible2(false);
  };

  const handleDelete3 = () => {
    setIsVisible3(false);
  };

  const handleDelete4 = () => {
    setIsVisible4(false);
  };

  const handleDelete5 = () => {
    setIsVisible5(false);
  };

  const handleDelete6 = () => {
    setIsVisible6(false);
  };

  const handleDelete7 = () => {
    setIsVisible7(false);
  };

  const handleDelete8 = () => {
    setIsVisible8(false);
  };

  const handleRecipeClick = (name, recipe, photo) => {
    Rglobals.Name = name;
    Rglobals.Recipe = recipe;
    Rglobals.Photo = photo;
    // Add the navigation logic here for redirecting to the recipes page
  };

  return (
    <div>
      {isVisible1 && (
        <div>
          <div>
            <img src="assets/almondine.jpg" alt="Almondine" width="85" />
          </div>
          <div>Almondine</div>
          <button onClick={handleDelete1}>Delete</button>
          <button
            onClick={() =>
              handleRecipeClick(
                'Almondine',
                'Bring a large pot of salted water to a boil. Meanwhile, prep an ice bath...',
                'assets/almondine.jpg'
              )
            }
          >
            View Recipe
          </button>
        </div>
      )}
      {isVisible2 && (
        <div>
          <div>
            <img src="assets/ambrosia salad.jpg" alt="Ambrosia Salad" width="85" />
          </div>
          <div>Ambrosia Salad</div>
          <button onClick={handleDelete2}>Delete</button>
          <button
            onClick={() =>
              handleRecipeClick(
                'Ambrosia Salad',
                'In a large bowl, fold together Cool Whip and sour cream. Add oranges...',
                'assets/ambrosia salad.jpg'
              )
            }
          >
            View Recipe
          </button>
        </div>
      )}
      {/* Repeat the pattern for the remaining items */}
    </div>
  );
};

export default favorite;

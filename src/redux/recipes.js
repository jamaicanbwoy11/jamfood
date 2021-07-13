import pelau from './../assets/recipes/pelau.webp';
import curry_goat from './../assets/recipes/curry-goat.webp';
import curry_chicken from './../assets/recipes/curry-chicken.webp';
import stew_chicken from './../assets/recipes/stew-chicken.webp';
import bbq_chicken from './../assets/recipes/bbq-chicken.webp';
import shepard_pie from './../assets/recipes/shepard-pie.webp';

/* Template
  {
    title: '',
    ingredients: [],
    directions: [],
    src: '',
    notes: '',
    servingSize: '',
  },
  */



export const recipes = [
  {
    title: 'JERK CHICKEN',
    ingredients: [
      '3 lbs. chicken pieces',
      '1 tsp. salt',
      '1/2 tsp. black pepper',
      '2 tbsp. mixed green seasoning and Grace Jerk Seasoning',
      
    ],
    directions: [
      ' Season chicken with salt, pepper, green seasoning, minced garlic, Worcestershire sauce, soy sauce and ketchup.',
      'Add seasoned chicken and stir until pieces are well coated with Grace Jerk Seasoning, brown for 5 minutes.',
    ],
    src: pelau,
    notes: 'Pelau could also be baked in an oven. Cover pot with tin foil and bake at 350°F for 30-35 minutes. Chopped coriander could also be added to chicken.',
    servingSize: 'Serves 8',
  },
  {
    title: 'CURRY GOAT',
    ingredients: [
      '2 Ibs. lean goat meat',
      '1 tsp. salt',
      '1/4 tsp. black pepper',
      '1/2 cup chopped onion',
      '2 tsp. minced garlic',
      '3 tbsp. green seasoning',
      '2 tbsp. cooking oil',
      '3 tbsp. curry powder',
      '2 bay leaves',
      '1.5 cups hot water',
    ],
    directions: [
      'Trim, wash and cut meat in bite-size pieces.',
      'Season well with salt. black pepper, onion, garlic and green seasoning.',
      'Heat oil in a heavy pot.',
      'Mix curry powder and bay leaves in 4 cup water, add to hot oil and fry for a minute.',
      'Add meat and sauté for 10 minutes stirring Occasionally to coat meat well.',
      'Add water to meat and bring to a boil. Cover and simmer on low heat until meat is tender.',
      'Adjust salt and hot pepper. Serve with boiled rice or roti.',
    ],
    src: curry_goat,
    notes: '',
    servingSize: 'Serves 6',
  },
  {
    title: 'CURRY CHICKEN',
    ingredients: [
      'chicken (3 Tbs.)',
      '1 tsp. minced garlic',
      '2 tbsp. minced green seasoning',
      '1 tsp. salt or to tastee',
      '1/2 tsp. hot pepper',
      '2 tbsp. vegetable oil',
      '3-4 tbsp. curry powder',
      '1/2 cup chopped tomatoes',
      '1/2 cup chopped onion',
      '1/2 cup hot water',
    ],
    directions: [
      'Cut chicken in small pieces and season with garlic, green seasoning, salt and hot pepper.',
      'Marinate for 30 minutes or more.',
      'Heat oil in an iron pot or skillet.',
      'Mix cury powder with 1/4 cup water until smooth, add to hot oil and cook 2-3 minutes.',
      'Add chicken and stir to coat in curry, allow all water to dry out. Stir well (About 10 minutes).',
      'Add tomatoes and onion, cook for a minute. Stir in 1/2 cup hot water.',
      'Lower heat to medium, cover and cook until meat is tender. Add more water if more sauce is required.',
      'Adjust salt and hot pepper.',
    ],
    src: curry_chicken,
    notes: '',
    servingSize: 'Serves 6',
  },
  {
    title: 'BROWN STEW CHICKEN',
    ingredients: [
      'chicken, cut in serving pieces (3.5 Ibs.)',
      '3 tbsp. minced green seasonings',
      '1 tsp. minced garlic',
      '1 tsp. salt',
      '1/2 tsp. black pepper',
      '1 tbsp. oil',
      '3 tbsp. brown sugar',
      '1 cup water or chicken broth',
      '1 tsp. hot pepper or to taste',
      '1/2 cup chopped onion',
    ],
    directions: [
      'Season chicken with green seasoning, garlic, salt and black pepper and leave to marinate for 1/2 hour.',
      'Heat oil in a heavy pot, add sugar and alow to brown.',
      'Add chicken and allow to brown all over, Turning continuously until liquid dries out.',
      'Add I cup water, hot pepper and onion; cover pot and cook on medium heat until chicken is tender. Add more water for gravy and adjust salt and pepper.',
      'Serve hot with rice, salad or vegetables.',
    ],
    src: stew_chicken,
    notes: 'Add 1 cup cooked carrots and scotch bonnent after browning chicken.',
    servingSize: 'Serves 8',
  },
  {
    title: 'BEEF PATTIES',
    ingredients: [
      '1 tsp. salt',
      '1/2 tsp. black pepper',
      '1 tsp. minced garlic',
      '2 tbsp. green seasoning',
      '2tbsp all purpose seasoning ',
      'flour and tumeric',
    ],
    directions: [
      'Season beef with salt, black pepper, garlic, all purpose seasoning and green seasoning.',
    ],
    src: bbq_chicken,
    notes: '',
    servingSize: 'Serves 8',
  },
  {
    title: "SHEPHERD'S PIE JAMAICAN STYLE",
    ingredients: [
      '2 lbs. potatoes',
      '1/3 cup hot milk',
      '1 lb. ground beef',
      '1 tbsp. green seasoning',
      '1 tsp. salt',
      '1/2 tsp. black pepper',
      '1 tbsp. oil',
      '1/2 cup chopped onion',
      '1/2 tsp. minced garlic',
      '1/2 cup beef stock',
      '1 tbsp. tomato paste',
      '1/2 tsp. dry or prepared mustard',
      '1 cup cup sliced mushrooms',
      '1 cup red and yellow sweet pepper, thinly sliced or chopped',
      '1/4 cup grated cheese',
    ],
    directions: [
      'Cook potatoes in salted water until tender, crush with milk and set aside.',
      'Season beef with green seasoning, salt and black pepper.',
      'Heat oil in skillet, add onion and garlic and cook until softened.',
      'Add beef and cook for 10 minutes stiring occasionally.',
      'Add stock, tomato paste, mustard, mushrooms and sweet peppers. Cook for 10 minutes more, adjust seasoning and cool.',
      'In a greased dish spread half of the mashed potatoes, all of the meat mixture and cover with remaining potato.',
      'Sprinkle cheese on top.',
      'Bake at 350°F for 25-30 minutes or until heated thoroughly and golden brown.',
    ],
    src: shepard_pie,
    notes: '',
    servingSize: 'Serves 6',
  },
]

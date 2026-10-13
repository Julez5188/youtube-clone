export const API_KEY = 'AIzaSyCVyBRYG7rAprqL0Sx4Q5mN6ux8ay8lFyI';

export const value_converter = (value) => {
  if(value >= 1000000)
  {
    return Math.floor(value/1000000) + "M";
  }
  else if(value >= 1000)
  {
    return Math.floor(value/1000) + "K";
  }
  else {
    return value;
  }
}
const getWeather = async (city) => {
  const response = await fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`);
  const data = await response.json();
  return data;
};

export default getWeather;

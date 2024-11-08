//1. Get all the countries from the Asia continent using the filter method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log("Asian Countries:", asianCountries.map(country => country.name.common));
  })
  .catch(error => console.error(error));

//b.Get all the countries with a population of less than 2 lakhs using Filter method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    const asiaCountries = countries.filter(country => country.region === 'Asia');
    console.log(asiaCountries);
  })
  .catch(error => console.error('Error fetching data:', error));

//c.Print the following details name, capital, flag, using forEach method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags[0]}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

//d.Print the total population of countries using reduce method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => console.error('Error fetching data:', error));

//e.Print the country that uses US dollars as currency.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    const usdCountries = countries.filter(country => {
      return country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
    });
    console.log(usdCountries);
  })
  .catch(error => console.error('Error fetching data:', error));

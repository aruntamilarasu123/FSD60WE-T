//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//   a String representing the studio, and a String representing the rating as its arguments, and sets the 
//   respective class properties to these values.
// class Movie{
//     constructor(title, studio, rating){
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
    
// }

// const extraction = new Movie("Extraction", "NETFLIX", "R");

// const captainAmerica = new Movie("Captain America: The First Avenger", "MARVEL","PG13");

// console.log(extraction, captainAmerica);
    //Output:
    // Movie { title: 'Extraction', studio: 'NETFLIX', rating: 'R' } Movie {
    //     title: 'Captain America: The First Avenger',
    //     studio: 'MARVEL',
    //     rating: 'PG13'
    //   }

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no 
//   rating is provided.
// class Movie{
//     constructor(Title = "Extraction", Rating = "PG")    {
// this.Title=Title;
// this.Rating=Rating;
//     }
// }
// const defaultValue = new Movie();
// const nonDefault = new Movie("Captain America: The First Avenger","PG13")
// console.log(defaultValue, nonDefault);
    //Output:
    //Movie { Title: 'Extraction', Rating: 'PG' } Movie { Title: 'Captain America: The First Avenger', Rating: 'PG13' }

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new 
//   array of only those movies in the input array with a rating of "PG". You may assume the input array 
//   is full of Movie instances. The returned array need not be full.
// class Movie {
//     constructor(title, rating) {
//       this.title = title;
//       this.rating = rating;
//     }
//   }
//   function getPG(movies) {
//      return movies.filter(movie => movie.rating === 'PG');
// }
//   const movies = [
//     new Movie('Movie 1', 'PG'),
//     new Movie('Movie 2', 'R'),
//     new Movie('Movie 3', 'PG-13'),
//     new Movie('Movie 4', 'PG')
//   ];
  
//   const pgMovies = getPG(movies);
  
//   pgMovies.forEach(movie => console.log(movie.title));
    //Output:
    //Movie 1
    //Movie 4

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//   the studio “Eon Productions”, and the rating “PG­13”
// class Movie{
//     constructor(title, studio, rating){
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
    
// }
// const casinoRoyale = new Movie("Casino Royale", "Eon Productions","PG13")
// console.log(casinoRoyale);
    //Output:
    // Movie {
    //     title: 'Casino Royale',
    //     studio: 'Eon Productions',
    //     rating: 'PG13'
    //   }

//2.Convert the UML diagram to Typescript class. - use number for double
// class Circle {
//     Constructor with default values for radius and color
//     constructor(radius = 1.0, color = "red") {
//         this.radius = radius;  // Initialize radius
//         this.color = color;    // Initialize color
//     }

//     Method to get the radius
//     getRadius() {
//         return this.radius;
//     }

//     Method to set the radius
//     setRadius(radius) {
//         this.radius = radius;
//     }

//     Method to get the color
//     getColor() {
//         return this.color;
//     }

//     Method to set the color
//     setColor(color) {
//         this.color = color;
//     }

//     Method to calculate the area of the circle
//     getArea() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }

//     Method to calculate the circumference of the circle
//     getCircumference() {
//         return 2 * Math.PI * this.radius;
//     }
// }
// const circle1 = new Circle();  // Default values: radius = 1.0, color = "red"
// console.log(circle1.getRadius());  // Output: 1.0
// console.log(circle1.getColor());   // Output: red

// circle1.setRadius(5);
// circle1.setColor("blue");

// console.log(circle1.getRadius());  
// Output: 5

// console.log(circle1.getColor());   
// Output: blue

// console.log(circle1.getArea());    
// Output: 78.53981633974483 (Area of a circle with radius 5)

// console.log(circle1.getCircumference());  
// Output: 31.41592653589793 (Circumference of a circle with radius 5)

//3)Write a “person” class to hold all the details
// class Person {
//     Constructor to initialize the properties
//     constructor(name, age, gender, email = '', phoneNumber = '') {
//         this.name = name;                // Full name
//         this.age = age;                  // Age
//         this.gender = gender;            // Gender
//         this.email = email;              // Email (optional)
//         this.phoneNumber = phoneNumber;  // Phone number (optional)
//     }

//     Method to get the full name
//     getFullName() {
//         return this.name;
//     }

//     Method to set the full name
//     setFullName(name) {
//         this.name = name;
//     }

//     Method to get the age
//     getAge() {
//         return this.age;
//     }

//     Method to set the age
//     setAge(age) {
//         this.age = age;
//     }

//     Method to get the gender
//     getGender() {
//         return this.gender;
//     }

//     Method to set the gender
//     setGender(gender) {
//         this.gender = gender;
//     }

//     Method to get the email
//     getEmail() {
//         return this.email;
//     }

//     Method to set the email
//     setEmail(email) {
//         this.email = email;
//     }

//     Method to get the phone number
//     getPhoneNumber() {
//         return this.phoneNumber;
//     }

//     Method to set the phone number
//     setPhoneNumber(phoneNumber) {
//         this.phoneNumber = phoneNumber;
//     }

//     Method to display all person details
//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Gender: ${this.gender}`);
//         console.log(`Email: ${this.email ? this.email : "Not provided"}`);
//         console.log(`Phone Number: ${this.phoneNumber ? this.phoneNumber : "Not provided"}`);
//     }
// }

// const person1 = new Person("ARUN T", 24, "Male", "arun@example.com", "********83");

// console.log(person1.getFullName());   // Output: ARUN T
// console.log(person1.getAge());        // Output: 24
// console.log(person1.getGender());     // Output: Male
// console.log(person1.getEmail());      // Output: arun@example.com
// console.log(person1.getPhoneNumber());// Output: ********83
// person1.displayDetails();
// /* 
// Output:
// Name: ARUN T
// Age: 24
// Gender: Male
// Email: arun@example.com
// Phone Number: ********83
// */
//4)write a class to calculate the Uber price.
// class UberPriceCalculator {
//     constructor(pricePerKm = 200, Km = 1) {
//         this.pricePerKm = pricePerKm;          
//         this.Km = Km; 
//     }
//     calculatePrice()  {
        
//         return this.pricePerKm * this.Km;
//     }
// }
// const uber = new UberPriceCalculator();
// const price = uber.calculatePrice();
// console.log(price); 

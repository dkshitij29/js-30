const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
  ];
  
  const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
    'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
    'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Sample data for exercises in Array Cardio Day 1
  /*
  Task
    1. Filter the inventors born in the 1500s: Find all the inventors in the array who were born in the 1500s.
    2. Map the inventors' full names: Create an array containing the full names of all the inventors in the format "First Last".
    3. Sort the inventors by birth year: Sort the inventors array by birth year, from oldest to youngest.
    4. Calculate the total years lived by all the inventors: Calculate the total number of years lived by all the inventors combined.
    5. Sort the inventors by years lived: Sort the inventors array by the number of years they lived, from shortest to longest lifespan.
    6. Filter the people with last name starting with 'B': Find all the people in the array whose last names start with the letter 'B'.
    7. Sort the people alphabetically by last name: Sort the people array alphabetically by last name.
    8. Reverse the order of the people array: Reverse the order of the people array.
    */

    var fifteen;
    fifteen = inventors.filter(function(elements){
        if ( elements.year >= 1500 && elements.year <= 1599){
            return true
        }
    });
    // more advance way using a arrow function
    //fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)
    console.table(fifteen);

    var full_names = inventors.map(elements => elements.first + " " + elements.last)
    console.log(full_names)

    var birth_year;
    birth_year = inventors.sort(function(element_1, element_2){
        if (element_1.year > element_2.year){
            return true;
        }
    });
    console.table(birth_year)

    const totalyears = inventors.reduce((total, element)=>{
        return total + (element.passed - element.year);},0
    )
    console.log(totalyears)

    const sortedByYearsLived = inventors.sort((a, b) => {
        const yearsLivedA = a.passed - a.year;
        const yearsLivedB = b.passed - b.year;
        return yearsLivedA - yearsLivedB;
    });
    console.log(sortedByYearsLived); // Output: Sorted array of inventors by years lived

    const lastNameStartsWithB = people.filter(person => {
        const lastName = person.split(', ')[0];
        return lastName.startsWith('B');
    });
    console.log(lastNameStartsWithB); // Output: Array of people with last names starting with 'B'
    
    const sortedByLastName = people.sort((a, b) => {
        const lastNameA = a.split(', ')[0];
        const lastNameB = b.split(', ')[0];
        return lastNameA.localeCompare(lastNameB);
    });
    console.log(sortedByLastName); // Output: Sorted array of people alphabetically by last name

    const reversedPeople = people.reverse();
    console.log(reversedPeople); // Output: Reversed array of people

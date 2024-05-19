const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  // Array.prototype.some() // is at least one person 19 or older?

var age = people.some(function(person) {
    var date = (new Date()).getFullYear();
    return (date - person.year) >= 19;
});
    console.log(age); // This should correctly output whether at least one person is 19 or older

  // Array.prototype.every() // is everyone 19 or older?
  var allAdults = people.every(function(person) {
    var date = (new Date()).getFullYear();
    return (date - person.year) >= 19;
});
console.log(allAdults); // This will correctly output whether all people are 19 or older
  
  // Array.prototype.find()
  var id_finder = comments.find(function(comment){
    return comment.id == 823423 ;
  });
console.log(id_finder)
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  
  // Array.prototype.findIndex()
  const index = comments.findIndex(comment => comment.id === 823423);
  console.log(index); // This should output 1

// Deleting the comment with the ID of 823423
if (index !== -1) {
  comments.splice(index, 1);
}
console.log(comments);

  // Find the comment with this ID
  // delete the comment with the ID of 823423
  
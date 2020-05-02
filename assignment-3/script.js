

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];



for (var i=0 ; i<10 ; i++) {
  var first_letter=names[i][0]


  if (first_letter=='j' ||first_letter=='J') {
    speakgoodbye(names[i])
  } else {
    speakhello(names[i])
  }
}

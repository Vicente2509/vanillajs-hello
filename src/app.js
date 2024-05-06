window.onload = function() {
  //write your code here
  var who = ["The dog", "My grandma", "The mailman", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "my phone", "the car"];
  var when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function excusa(who, action, what, when) {
    var randwho = Math.floor(Math.random() * who.length);
    var randaction = Math.floor(Math.random() * action.length);
    var ranwhat = Math.floor(Math.random() * what.length);
    var ranwhen = Math.floor(Math.random() * when.length);

    var excusa =
      who[randwho] +
      " " +
      action[randaction] +
      " " +
      what[ranwhat] +
      " " +
      when[ranwhen];

    document.getElementById("Excusa").innerHTML = excusa;

    return excusa;
  }

  excusa(who, action, what, when);
};

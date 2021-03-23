var wrap = document.body.querySelector(".wrap");
var fini = document.body.querySelector(".done");
var start = 5;
var total = 0;

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (i = 0; i < list.length; i++){
  var ele = document.createElement("div");
  var eleName = document.createElement("h2");
  var eleAge = document.createElement("h3");
  
  if(list[i].age >= 25){ //USE THIS FOR HW
    ele.style.color='green';
  }
  
  eleName.innerHTML = "Name: " + list[i].name;
  eleAge.innerHTML = "Age: " + list[i].age;
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  wrap.appendChild(ele);
}

function count(total){
  var total2 = total + 1;
  return total2;
}

fini.innerHTML = 5;

document.body.querySelector(".clicker").addEventListener("click", function(){
  total = count(start); 
  start = 0;
  start = start + total;
  fini.innerHTML= total;
})

const body = document.querySelector("body");


///////////////task 1/////////////////


const cars = [
  {
    title: "BMW",
    price: 40000,
    count: "15",
  },
  {
    title: "Toyota",
    price: 20000,
    count: "13",
  },
  {
    title: "Ford",
    price: 30000,
    count: "20",
  },
  {
    title: "Chevrolet",
    price: 60000,
    count: "9",
  },
  {
    title: "Volkswagen",
    price: 30000,
    count: "13",
  },
];

function countGroupSum(prise, count) {
  return +prise * +count
}

const ul = document.createElement("ul")

let totalSum = 0;

for (let i = 0; i < cars.length; i++) {
  const li = document.createElement("li")

  li.innerText = `Автомобиль ${cars[i].title}, стоимость ${cars[i].price}$,  количество ${cars[i].count} штук`
  ul.append(li);
  const liGroupSum = document.createElement("li");
  let groupSum = countGroupSum(cars[i].price, cars[i].count);

  totalSum += groupSum;

  liGroupSum.innerText = `Автомобили ${cars[i].title} общей стоимостью ${groupSum}$`
  ul.append(liGroupSum);

}

const liTotalSum = document.createElement("li");

liTotalSum.innerText = ` Общая стоимость всех автомобилей ${totalSum}$`

ul.append(liTotalSum);

body.append(ul);



///////////////task 2/////////////////

const dogs = [
  {
    breed: "golden retriever",
    age: 7,
  },
  {
    breed: "labrador retriever",
    age: 4,
  },
  {
    breed: "french bulldog",
    age: 12,
  },
  {
    breed: "beagle",
    age: 6,
  },
  {
    breed: "german shepherd dog",
    age: 2,
  },
  {
    breed: "poodle",
    age: 3,
  },
  {
    breed: "bulldog",
    age: 4,
  },
];


 for (let i = 0; i < dogs.length; i ++){

   const p = document.createElement("p");
   p.innerText = `${dogs[i].breed}'s age is ${dogs[i].age}`;
   body.append(p);

 }


/////////////////////task 3/////////////////////

const films = [
  {
    name: "Matrix",
    year: 1999,
  },
  {
    name: "Jaws",
    year: 1975,
  },
  {
    name: "Avatar",
    year: 2009,
  },
  {
    name: "Predator",
    year: 1987,
  },
  {
    name: "Interstellar",
    year: 2014,
  },
  {
    name: "Inception",
    year: 2010,
  },
  {
    name: "Batman returns",
    year: 2012,
  },
];

const ulFilm = document.createElement("ul")


for (let i = 0; i < films.length; i++) {
  const li = document.createElement("li")

  li.innerText = `Film ${films[i].name}  premiere in  ${films[i].year} `
  
  ulFilm.append(li);
  
}

body.append(ulFilm);

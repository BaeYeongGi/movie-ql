export const people = [
  {
    id: 0,
    name: "Yeoonggi",
    age: 27,
    gender: "male"
  },
  {
    id: 1,
    name: "Gildong",
    age: 27,
    gender: "male",
  },
  {
    id: 2,
    name: "Hyeoksoo",
    age: 28,
    gender: "male",
  },
  {
    id: 3,
    name: "soobeen",
    age: 26,
    gender: "female"
  },
  {
    id: 4,
    name: "choonja",
    age: 30,
    gender: "female"
  },
  {
    id: 5,
    name: "okboon",
    age: 31,
    gender: "female"
  }    
];

// 모든 people 의 배열을 확인후 0번째의 대상을 보냄

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
}
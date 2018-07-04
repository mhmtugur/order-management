const obj = {
  name: 'Mehmet',
  lastName: 'Ugur',
  subClass : {
    subName: 'Ahmet',
    subLastName: 'TEst'
  }
};




const obj2 = Object.assign({}, obj);

const obj3 = obj;

obj2.subClass.subLastName = '';
obj2.name = '';


console.log(obj);
console.log(obj2);
console.log(obj3);
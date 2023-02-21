function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catData of array) {
        let eachCat = catData.split(' ');
        let catName = eachCat[0];
        let catAge = Number(eachCat[1]);
        let myCat = new Cat(catName, catAge);
        myCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])
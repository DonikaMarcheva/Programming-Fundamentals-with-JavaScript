function guineaPic(array) {
    let food = Number(array[0]) * 1000;
    let hay = Number(array[1]) * 1000;
    let cover = Number(array[2]) * 1000;
    let pigWeight = Number(array[3]) * 1000;
    for (let i = 1; i <= 30; i++) {
        // Every day Puppy eats 300 gr of food
        //Every second day Merry first feeds the pet, 
        //then gives it a certain amount of hay equal to 5% of the rest of the food
        //On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
        food -= 300;
        if (i % 2 === 0) {
            hay -= 0.05 * food;
        }
        if (i % 3 === 0) {
            cover -= (1 / 3) * pigWeight;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
guineaPic(["9",
    "5",
    "5.2",
    "1"])

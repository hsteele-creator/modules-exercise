
import {choice, remove} from "./helpers"
import fruit from "./foods.js"

const chosen = choice(fruit)
const length = fruit.length

console.log(`I'd like one ${chosen} please`)
console.log(`Here you go: one ${chosen}`)
console.log(`Delicious! May I have another?`)

remove(chosen, fruit)

console.log(`I'm sorry, we're all out. We have ${length} left`)
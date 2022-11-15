
const choice = (items) => {
    const random = items[Math.floor(Math.random() * items.length)]
    return random
}

const remove = (item, items) => {

    for(let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            items.slice(0, i)
            return items
        }
    }
    const index = items.indexOf(item);
    const found =  items.splice(index, 1)
    return found
}

export {choice, remove}
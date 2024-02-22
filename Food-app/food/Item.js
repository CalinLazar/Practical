module.exports = class Item{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    print() {
        return `---------------\n` +
               `${this.name}: ${this.price} MDL \n`+
               `----------------\n`
    }
}
// This function
const student = {
    name: 'Mantresh',
    age: 20,
    city: 'Nsk',
    eng: 20,
    math: 89,
    phy: 44,
    getavg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
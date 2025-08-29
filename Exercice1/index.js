function pairNumbers (min, max) {
let result = ''
for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        if (result !== '') {
            result += ','
        }
        result += i
    }
}
return result 
}
console.log(pairNumbers(1,10))

export default pairNumbers

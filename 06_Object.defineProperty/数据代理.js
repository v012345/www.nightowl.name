let A = { x: 1 }
let B = { y: 2 }
Object.defineProperty(B, "x", {
    get() {
        return A.x;
    },
    set(x) {
        A.x = x;
    }
})
console.log(A, B)
B.x = 2;
console.log(A, B)
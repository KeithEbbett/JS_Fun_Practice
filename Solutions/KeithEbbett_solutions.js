//JS_Fun_Practice Hacktoberfest project

//function identity
let identity = function identity(x) {
  return x  
} 


//function addb(a, b)
let addb = function addb(a, b) {
  return a + b
}

//subb(a, b)
let subb = function subb(a, b) {
  return a-b
}

//function mulb(a, b)
let mulb = function mulb(a, b) {
  return a * b
}

//minb(a, b)
let minb = function minb(a, b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}

//maxb(a, b)
let maxb = function maxb(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

//add(...nums)
function add() {
  let sum = 0
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
  
}

//sub(...nums)
function sub() {
  let diff = 0
  for(let i = 0; i < arguments.length; i++) {
    diff -= arguments[i]
  }
  return diff
}

//mul(...nums)
function mul() {
  let prod = 0
  for(let i = 0; i < arguments.length; i++) {
    prod *= arguments[i]
  }
  return prod
}

//min(...nums)
function min() {
  let min = arguments[0]
  for(let i = 1; i < arguments.length; i++) {
    if(arguments[i] < min) {
      min = arguments[i]
    }
  }
  return min
}

//max(...nums)
function max() {
  let max = arguments[0]
  for(let i = 1; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}

//addRecurse(num...)
function addRecurse(num) {
  if (num <= 1)
    return 1
  return num && num + addRecurse(num - 1)
}

//mulRecurse(...nums)
function mulRecurse(num) {
  if (num <=1)
    return 1
  return num && num * mulRecurse(num-1) 
}

//minRecurse(...nums)





module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };
// feet to mile convert

/*
 * 1 feet = 0.0001893939393939394 mile
 *  1 mile = 5280 feet
 * 10000/5280
 */


function feetToMile(feet) {
    let feetValue = feet / 5280
    let feetRound = Math.round(feetValue)
    return feetRound
}

console.log(feetToMile(58558))


// wood calculator
/**
 * আমরা ধরে নিচ্ছি একটি চেয়ারে ১ ছেপটি কাট লাগে, এবং একটি টেবিলে ২ ছেপটি এবং একটু খাটে ৫ ছেপটি, সেই হিসাবে আমাদের function কাজ করবে। 
 */

function woodCalculator(chear, table, khat) {
    let chearCl = chear * 1;
    let tableCl = table * 2;
    let khatCl = khat * 5;
    return chearCl + tableCl + khatCl
}

console.log(woodCalculator(1, 3, 4))

// brik calculator


// tiny freind
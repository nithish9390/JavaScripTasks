// Print all numbers from 10 to 150 that are divisible by both 3 and 5.
// i=10
// while(i<=150){
//     if (i%3==0 && i%5==0)
//     {
//         console.log(i)
//     }
//     i++
// }

// Count how many numbers from 200 down to 50 are divisible by 7.
// i=200
// while(i>=50){
//     if (i%7==0){
//         console.log(i)
//     }
//     i--
// }


// Print numbers from 120 down to 20 that are not divisible by 5.
// i=120
// while(i>=20){
//     if (i%5!=0){
//         console.log(i)
//     }
//     i--
// }

// Find the average of all even numbers in the range from 10 to 100
// i=10
// sum=0
// count=0
// while(i<=100){
//     if (i%2==0){
//         sum+=i
//         count+=1
//     }
//     i++
// }
// console.log(sum/count)


// Find the average of all factors of a given number.
n=10
i=0
sum=0
count=0
while(i<n+1){
    if (n%i==0){
         sum+=i
         count+=1
    }
    i++
}
console.log(sum/count)


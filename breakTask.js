// Find the first even digit from the left in 753914286.
// let n=753914286
// var evn=0
// while(n>0){
//     if ((n%10)%2==0){
//         evn=n%10
//     }
//     n=parseInt(n/10)
// }
// console.log(evn)

// Find the first prime number between 50 and 100.
// let i=50
// while(i<100){
//     flag=true
//     let k=2
//     while(k<i){
//         if (i%k==0)
//         {
//             flag=false
//         }
//         k++
//     }
//     if (flag){
//        console.log(i)
//        break
//     }
//     i++
// }
// Find the first number whose digit sum is 10.
// for (let i=0;i<100;i++){
// let n=i
// let temp=n
// let sum=0
// while(n>0){
//     sum+=(n%10)
//     n=parseInt(n/10)
// }
// if (sum==10){
//     console.log(temp)
//     break
// }
// }

// Find the first number with exactly 3 divisors between 1 and 100
// for (let i=1;i<=50;i++){
// let n=i
// let count=0
// for (let j=1;j<=23;j++){
//     if (n%j==0){
//         count+=1
//     }
// }
// if (count==3)
// {    
//     console.log(n)
//     break
// }
// }

// Stop when 3 consecutive odd numbers occur between 1 and 50.
// let count=0
// for (let i=1;i<=50;i++){
//     if (i%2!=0){
//         console.log(i)
//         count+=1
//     }
//     if (count==3){
//         break
//     }
// }

// for (let i=0;i<=50;i++){
//     if (i%2==0){
//         continue
//     }
//     else{
//         console.log(i)
//     }
// }

// Print 1–40, skipping multiples of 4.
// for (let c=0;c<=50;c++){
//     if (c%4==0)
//     {
//         continue
//     }
//     else{
//         console.log(c)
//     }
// }

// Print 1–30, skipping numbers from 10–20
// for(let i=0;i<=30;i++){
//     if (i>=10 && i<=20){
//         continue
//     }
//     else{
//         console.log(i)
//     }
// }



// Print 1–50, skipping multiples of 3
// for (let c=0;c<=50;c++){
//     if (c%3==0)
//     {
//         continue
//     }
//     else{
//         console.log(c)
//     }
// }

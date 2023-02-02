function bonusScore(input){
let score = Number(input[0])
let bonusPoints = 0.00

if (score <= 100){
    bonusPoints += 5
} if (score > 100){
    bonusPoints = score * 0.20
} if (score >= 1000){
    bonusPoints = score * 0.10
} if (score % 10 == 5) {
    bonusPoints += 2
} if (score % 2 == 0){
    bonusPoints += 1
}
console.log(bonusPoints)
console.log(score + bonusPoints)

}
bonusScore(["270"])
function totalScore(scores){
    let total=0;
    for(let i=0;i<scores.length;i++){
        total+=scores[i];
    }
    return total;


}
const scores= [20,13,37];
const finalScore=totalScore(scores);
console.log(finalScore);

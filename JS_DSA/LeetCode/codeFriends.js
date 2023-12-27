let scores = {
    H: 3,
    E: 1,
    M:2
}

const Eric = ["E", "M"] 
const Bob = ["E", "M"]

function result(Eric, Bob){
  let EricScore =0, BobScore =0;
 for(let i =0; i<Eric.length;i++){
    EricScore += EricScore + scores[Eric[i]];
    BobScore += BobScore + scores[Bob[i]];
 }
 if(EricScore > BobScore){
    return 'Eric';
 } else if(EricScore < BobScore){
    return 'Bob'
 } else {
    return 'Tie'
 }
}
console.log(result(Eric, Bob));
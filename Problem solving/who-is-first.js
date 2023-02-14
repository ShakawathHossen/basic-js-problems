function findTopper(marks1, marks2,marks3) {
if (marks1>marks2 && marks1>marks3){
    return "Jim";
}
else if (marks2>marks1 && marks2>marks3){
    return "Dela";
}
else{
    return "Chinku";
}

}

// with math max 
function findTopper(marks1, marks2,marks3) {
    const maxMark=Math.max(marks1,marks2,marks3);
    if (maxMark===marks1){
        return "Jim";
    }
    else if (maxMark===marks2){
        return "Dela";
    }
    else{
        return "Chinku";
    }
    
    }
    
const jimMark=84;
const delaMark =10;
const chinkuMark =100;
const marks= findTopper(jimMark,delaMark,chinkuMark);
console.log(marks);
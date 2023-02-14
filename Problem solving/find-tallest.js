function findTallest(heights) {
    let largest = heights[0];
    for(let i=0;i<heights.length;i++){
        const index=i;
        const element=heights[index];
        if(element>largest){
            largest=element;
    }
    }
    return largest;

}
const heights= [157,134,188];
const tallest=findTallest(heights);
console.log(tallest);

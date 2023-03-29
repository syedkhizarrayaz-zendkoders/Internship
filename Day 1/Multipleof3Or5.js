function solution(number){
    let mpof3 = [];
    let mpof5 = [];
    let sum = 0;
    for(let i=0; i<number; i++){
      if(i % 3 == 0){
        mpof3.push(i);
      }else if(i % 5 == 0){
        mpof5.push(i);
      }
    }
    for(let j=0; j<mpof3.length; j++){
      sum += mpof3[j];
    }
    for(let k=0; k<mpof5.length; k++){
      sum += mpof5[k];
    }
    return sum;
  }
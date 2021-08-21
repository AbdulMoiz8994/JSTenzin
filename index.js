

var grade=8;

if(grade < 60 && grade % 2 !== 0){
    console.log("positive");
}else{
    console.log("negative");
}

if(grade === 90){
    console.log("A");
}else if(grade === 80){
    console.log("B");
}else if(grade === 70){
    console.log("C");
}else if(grade === 60){
    console.log("D");
}else{
    console.log("fail");
}

var total=0;
for(i=0; i<=100; i++){
    total += i
}
console.log(total);

var num=0;
for(var i =10; i >num; i--){
    // console.log(`2 X ${i} = ${2*i}`);
    console.log(i);
}

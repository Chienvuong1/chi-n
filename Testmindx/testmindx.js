function findOppositeNumber(n,a){
    let inputNumber=0;
    if(n<4||n>20){
         return "Nhap sai";
    }
    else if(a>n/2){
        inputNumber = a - n/2;
        return inputNumber;
    }
    else{
        inputNumber = a + n/2;
        return inputNumber;
    }
    
}
findOppositeNumber(10,6);

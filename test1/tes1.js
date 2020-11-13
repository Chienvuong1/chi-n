let s1=prompt("nhap s1");
let s2=prompt("nhap s2");
let s3="";
let a=[];
let b=[];


for(let i=0;i<s1.length;i++){
    a.push(s1[i])
}
for(let i=0;i<s2.length;i++){
    b.push(s2[i])
}

while(a.length!==0 || b.length!==0){
    if(a.length>b.length){
        
        if(b.length===0) s3+=a[0]
        s3+=a[0]+b[0]
        a.shift();
        b.shift();
    }
    else{
        if(a.length===0) s3+=b[0];
        else s3+=a[0]+b[0]
    
        a.shift();
        b.shift();
    }
    
}
console.log(s3);
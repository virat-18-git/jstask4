// polindromes

op="*"
for(i=0;i<=10;i++){
    console.log(op)
    op+="*"
   
}

let str=" STEP NOT ON PETS"
op1=""
for(i=str.length-1;i>=0;i--){
    op1+=str[i]
   }
console.log(op1)

let str2="LIRIL"
op2=""
for(i=str2.length-1;i>=0;i--){
    op2+=str2[i]
}
console.log(op2)

let arr=["one","two","three","four","six","one"]
op3=""
for(i=0;i<=arr.length-1;i++){
    op3+=arr[i][1]
   
}
console.log(op2)

let arr2=["one","two","three","four"]
op=""
for(i=arr2.length-1;i>=0;i--)
    {
    op+=arr2[i]
   }
console.log(op)


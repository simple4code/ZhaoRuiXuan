var sum=0
var i=1
while(i<=100){
    var num=i%10
    if(num!=9){
        sum+=i
    }i++
}console.log(sum)
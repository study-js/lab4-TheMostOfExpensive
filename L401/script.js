function max(a,b,c){
    var result = a;
    if (b > result) result = b;
    if ( c > result) result = c;
    return result;
     
}
alert (max(10,2,3));





//bài 2//

function makeLine(length) {
 var line =""
 for ( i=1;i<=length;i++) {
    line +="*";
}
return line + "\n";
}
function numberOneTriangle(width) {
    var triangle="";
    for ( i=1;i<=width;i++) {
        triangle += (makeLine(i));
    }
return triangle;    
}
numberOneTriangle(5);
console.log(numberOneTriangle(5))

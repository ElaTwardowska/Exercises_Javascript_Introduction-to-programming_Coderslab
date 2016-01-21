/**
 * Created by Elatwardowska on 2016-01-09.
 */

console.log("Hello world");


/*
var i=8;
var j=10;
var max=30;

if (i > 10) {
    console.log ("I jest większe od 10");
}

else {
    console.log ("I jest mniejsze od 10");
}
*/

/*var i= 15;
 if (i > 10){
     console.log ("I jest większe od 10");
 }
else if (i > 0){
     console.log ( "I jest wieksze od 0");
 }
else {
     console.log ("I jest mniejsze od o")
 }
 */

//Zadanie 1
document.write("** Zadanie 1 **<br>");

var isMax = function() {

    table = [1,4,7,4,23,5,3,2,4,3]
    var max = table[0];

    for (var i=1; i<table.length; i++) {
        if (table[i] > max) {
            max = table[i];
        }
    }
    return max;
}
document.write(isMax());

document.write("<br>");
document.write("<br>");

/* Zadanie 2 */
document.write("** Zadanie 2 **<br>");

var isSum = function () {
    table = [1,1,1,2,2,2,2,2,2,3]
    var sum = table[0];

    for (var i=1; i<table.length; i++) {
        sum=sum + table[i]
    }
    return sum;
}
document.write(isSum());

document.write("<br>");
document.write("<br>");

/* Zadanie 3 */

document.write("** Zadanie 3 **<br>");

var position = function (x,A){
    var tmp=[0]; //tablica z wynikami
    var j=0; //index dla tablicy tmp``

    for (var i=0; i<A.length; i++) {
        if (A[i]=== x) {
            tmp[j]=i;
            j++;
        }
    }
    return tmp;
}
var x = 7;
var tabA = [9,4,3,2,4,7,5,7,7,0,0];
document.write(position(x,tabA));

document.write("<br>");
document.write("<br>");

//Zadanie 4
document.write("** Zadanie 4 **<br>");

var a = 44;
var b = 5;
var c = 12;

if ( a > b) {
    if (a > c){
        document.write ("a jest największe");
    }
    else {
        document.write("c jest najwieksze");
    }
}
else {
    if (b > c){
        document.write ("b jest najwieksze");
    }
    else {
        document.write("c jest największe");
}
}
document.write("<br>");
document.write("<br>");

//Zadanie 5
document.write("** Zadanie 5 **<br>");

var points =50;

if (points < 40) {
    document.write ("ocena niedostateczna");
}
else if (points < 55) {
    document.write ("ocena dopuszczająca");
}
else if (points <70) {
    document.write("ocena dostateczna");
}
else if (points <85) {
    document.write("ocena dobra");
}
else if (points <99) {
    document.write("ocena bardzo dobra");
}
else if (points<101) {
    document.write("ocena celująca")
}
else {
    document.write("niemożliwy wynik");
}
document.write("<br>");
document.write("<br>");

//var i = 0;
//while (i<10) {
//    console.log("wartosć i jest rowna "+ i);
//    i=i + 1;
//}
//console.log ("wartość "+i);
//

//Zadanie 6 ( 2 rodzaje pętli)
document.write("** Zadanie 6 **<br>");

var x=8;
var i=1;
var silnia = 1;

while (i <= x) {
    silnia = silnia * i;
    i= i + 1;
}
document.write("Wartość silni z " + x + " równa się " + silnia);

document.write("<br>");

silnia =1;
for ( var j = 1; j <= x; j = j+1){
    silnia = silnia * j;
}
document.write("Wartość silni z " + x + " równa się " + silnia);
document.write("<br>");
document.write("<br>");

//Zadanie 7
document.write("** Zadanie 7 **<br>");

var x=3;
var y=7;
var sum= 0;
var i=x;

while (i <= y) {
    sum = sum +i;
    i = i +1;
}
document.write("Wartość sumy równa sie " + sum);

document.write("<br>");

sum=0;
for (var j = x; j <= y ; j= j + 1) {
    sum = sum +j;
}
document.write("Wartość sumy równa się "+ sum);
document.write("<br>");
document.write("<br>");

//Zadanie 8
document.write("** Zadanie 8 **<br>");

var n=5;
var i = 0;

while (i <= n) {
    if (i%2===0) {
        document.write("Liczba " + i +" jest parzysta"+ "<br>")

    }
    else {
        document.write("Liczba " + i+ " jest nieparzysta"+ "<br>")
    }
    i=i+1;
}
document.write("<br>");

var n=5;
var i = 0;
for (j=0; j<= n; j=j+1) {
    if (j%2 === 0) {
        document.write ("Liczba " + j + " jest parzysta"+ "<br>");
    }
    else {
        document.write ("Liczba " + j + " jest nieparzysta"+ "<br>");
    }
}
document.write("<br>");
document.write("<br>");

//Zadanie 9A
document.write("** Zadanie 9A **<br>");

var n=5;
for (var i = 0; i < n; i= i + 1) {
    for (var j=0; j < n; j= j+1) {
        document.write ("*");
    }
    document.write("<br>")
}
document.write("<br>");
document.write("<br>");

//Zadanie 9B
document.write("** Zadanie 9B **<br>");

var n=5;
for (var i=0; i < n; i=i+1) {
    for (var j=0; j < n; j=j+1) {
        if ((i + j)%2!==0) {
            document.write("*");
        }
        else{
            document.write ("&nbsp")
        }
    }
    document.write("<br>")
}
document.write("<br>");
document.write("<br>");

//Zadanie 10
document.write("** Zadanie 10 pętle zależne **<br>");

var n=5;
for (var i = 0; i < n; i= i + 1) {
    for (var j=0; j <= i; j= j+1) {
        document.write ("*");
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");

//Zadanie 10 (pętle niezależne + if)

document.write("** Zadanie 10 - pętle niezależne **<br>");

var n=5;
for (var i=0; i < n; i=i+1) {
    for (var j=0; j<n; j=j+1) {
        if (j <= i) {
            document.write("*");
        }
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");

//Zadanie 11
document.write("** Zadanie 11 **<br>");

var n=5;
for (var i=1; i <= 5; i=i+1) {
    for (var j=0; j<5; j=j+1) {
        if (j < i) {
            document.write("*");
        }
        else {
            document.write(j+1);
        }
    }
    document.write("<br>");
}
for (var i=5; i > 0; i=i-1) {
    for (var j=0; j<5; j=j+1) {
        if (j < i) {
            document.write("*");
        }
        else {
            document.write(j+1);
        }
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//Zadanie 12
document.write("** Zadanie 12 **<br>");

var n=3;
for(i = 1; i <= n; i++) {
    for(j = 1; j <= n; j++) {
        document.write( i +" x "+ j + " = "+ (i * j)+ "&nbsp");
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");

//Zadanie 13
document.write("** Zadanie 13 **<br>");

var x=15;
var FooBar = function(x){
    for(var i = 1; i <= x; i++) {
        if((i%3===0)&&(i%5===0)) {
            document.write("FOOBAR");
        }
        else if(i%3===0) {
            document.write("Foo")
        }
        else if (i%5===0){
            document.write("Bar");
        }
        else {
            document.write(i);
        }
    }
}
FooBar(x);
document.write("<br>");
document.write("<br>");


//Zadanie 14
document.write("** Zadanie 14 **<br>");

var a=3;
var n=3;
var pow = function (a,n) {
    if (a===0 && n===0) {
        return NaN;
    }
    else if (n===0) {
        return 1;
    }
    else if (n===1) {
        return a;
    }
    else {
        var k = a;
        for (var i=1; i< n; i++) {
          k=k*a;
        }
    }
    return k;
};
document.write(pow(a,n));
document.write("<br>");
document.write("<br>");



//Zadanie 15
document.write("** Zadanie 15 **<br>");

var n=7;
var IsPrimeNr = function(n) {
    if (n <= 1) {
        return NaN;
    }
    var lastDiv = Math.floor(Math.sqrt(n));

    /* liczba 2 i 3 to liczby pierwsze */
    if (lastDiv === 1) {
        return true;
    }
    for (var i = 2; i <= lastDiv; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
document.write(IsPrimeNr(n));
document.write("<br>");
document.write("<br>");

//zadanie 16
document.write("** Zadanie 16 **<br>");


var RandomResult = function() {
  var counter=0;
  for (;;) {
      counter++;

      if ((Math.floor(Math.random() * 21))!== 10) {
          document.write("zła liczba <br>");
      }
      else {
          document.write("Dobra liczba <br>");
          return counter;
      }

  }
}
document.write(RandomResult());


//
//FUNKCJE -
//
//function sayHello(userName) {
//    document.write ("witaj userze " + userName + "<br>");
//}
//sayHello("Jacek");
//sayHello("Adam");
//
//var name = "Ala";
//sayHello(name);

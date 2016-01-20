/**
 * Created by Elatwardowska on 2016-01-17.
 */

//var n=4;
//var hello = function(n) {
//    var isEven = false;
//    if (n % 2 === 0) {
//        isEven = true;
//    }
//
//    for (var i = 1; i <= n; i++) {
//        if (isEven) {
//            document.write("Hello even <br>");
//        }
//        else {
//            document.write("Hello odd <br>");
//        }
//    }
//}
//hello(n);

//var n=17;
//var IsPrimeNr = function(n) {
//    if (n <= 1) {
//        return NaN;
//    }
//    var lastDiv = Math.floor(Math.sqrt(n));
//
//    for (var i = 2; i < lastDiv; i++) {
//        if (n % i === 0) {
//            return false;
//        }
//    }
//    return true;
//};
//document.write(IsPrimeNr(n));

//
//var silnia = function(n) {
//    var k = 1;
//    if (n<0) {
//        return NaN;
//    }
//    else if (n<=1) {
//        return 1;
//    }
//    else {
//        for (var i=2; i<=n; i++) {
//            k=k*i;
//        }
//    }
//    return k;
//}
//document.write(silnia(100));

//var myPi = function(iterNum) {
//    var pi;
//    var n = 3; 			/* wykladnik i silnia zaczyna sie od 2 */
//    var sign = false; 	/* if sign = false make "-" esle + */
//    /* start from - */
//    /* pierwsza czesc wzor = iteracja zerowa */
//    pi = 1;
//    /* kolejne iteracje */
//    for (i = 1; i < iterNum; i++) {
//        if (sign) {
//            sign = false;
//            pi = pi + (1 / n);
//        } else {
//            sign = true;
//            pi = pi - (1 / n);
//        }
//        /* */
//        n = n + 2;
//    }
//    return pi*4;
//}
//document.write(myPi(1000));

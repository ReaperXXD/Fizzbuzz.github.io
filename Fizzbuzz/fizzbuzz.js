for ( var x = 1; x <= 1000; x++) {
    var result = '';
    if(x % 3 == 0){
        result+='Fizz';
    }

    if (x % 5 == 0){
        result += 'buzz';
    }

    console.log (result || x );
}
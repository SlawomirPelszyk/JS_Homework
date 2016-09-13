function palindrom(x) 
{
    var palin = x.split("").reverse().join("");

    if (palin === x){
        return "słowo " + x + " jest palindromem";
    } else {
        return "Niestety słowo " + x + " nie jest palindromem";;
    }
}   

palindrom("kajak");

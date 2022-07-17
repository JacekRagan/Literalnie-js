function correct(){
    const slowo = "Polska";
    var guess = document.getElementById("slowo").value;
    console.log(guess);
    bledy = 0;
    if(guess.length < slowo.length){
        alert("Za malo liter ma twoje slowo");
        return;
    }
    for(var i = 0; i<=5; i++){
        var end = document.getElementById("end" + i).innerHTML = " ";
    }
    for(var i = 0; i < slowo.length; i++){
        console.log(i);
        if(guess[i]!=slowo[i]){
            console.log(guess[i]);
            bledy += 1;
            console.log("Ilosc popelnionych bledow "+ bledy);
            var end = document.getElementById("end" + i).innerHTML = guess[i];
            var h2 = document.getElementById("end"+i);
            h2.style.color = "red";
            if(slowo[i]> guess[i]){
                continue;
            }
        }
        if(guess[i]===slowo[i]){
            var dobre = document.getElementById("G"+i);
            dobre.innerHTML = guess[i];
        }
    }
    if(bledy == 0){
        var end = document.getElementById("end").innerHTML = "Zgadles slowo";
    }
}


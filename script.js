//oppgave 1

//a)
let i = 0;

while(i<10){
    i++
    document.write(i +"<br>")
}
//b 


for(let o=0; o<=10; o++){
    document.write(o +"<br>")
}

// Oppgave 2
let passord = prompt("skriv inn passordert")
let forsok = 0;

while(forsok!==3 && passord !== "passord"){
    passord = prompt("Feil passord prøv igjen")
    forsok+=1;
}

if(forsok == 3)
{
     document.write("Du kom ikke inn" +"<br>")
}

if (passord == "passord"){
    document.write("Riktig passord" +"<br>")
}
// Oppgave 3
let rekkefolge = prompt("Skriv inn partall eller oddetall")


    if(rekkefolge == "partall")
    {
         for(let p = 0;  p < 100; p+=2){
        document.write(p + "<br>");
    }
    
    }

       if(rekkefolge == "odetall")
    {
         for(let p = 0;  p < 100; p+=3){
         document.write(p+ "<br>");
    }
    }

    // Oppgave 4
document.write("oppgave 4" + "<br>");
    for(let i = 1; i<11; i++){
        for(let j = 1; j<11; j++){
         document.write(i * j + "<br>");
    }
    }




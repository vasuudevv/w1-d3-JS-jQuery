let str = `Thank you so much for contacting us. Dreamland guest relations.You're speaking with Ronaldo. May I have your name, please? Yes, sure.My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;

let s = str.split(/[.?]/);

for(let i = 0; i < s.length; i++){
    s[i] = s[i].trim(); 
    var count = (s[i].match(/ /g) || []).length;      //checking the no. of spaces in between the words of each sentence
    if(count <= 2){                                  //if no.of space <= 2, that means sentence doesn't have
        s.splice(i,1);                              //more than 3 words hence discard that sentence.
    }
    for(let j = 0; j < s[i].length; j++){
        if(!isNaN(s[i].charAt(j)) && !(s[i].charAt(j) === " ")){ //checking for numbers in string

            s[i].replace(s[i][j], "X");                //replace no. with x
            s[i].replace("9876535362","XXXXXXXXXX");
        }
    }
    
    console.log(i+1 + "." + " " + s[i]);
}


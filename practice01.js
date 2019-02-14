 words = "racecar";

morewords = [];

for(var i = 0; i < words.length; i++){
    
    morewords.push(words[i]);
    console.log(morewords);
}

function palindrome(str){
 reversed = str.split("").reverse().join("");
 if(reversed == str) return console.log(str + " is a palindrome"); 
}

palindrome(words);


    


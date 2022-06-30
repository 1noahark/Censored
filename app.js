

// Hello inspector (the one who is reading this code now) Have a great day!



const btn = document.getElementById("bt");

const credit = document.getElementById("credit");


var check = 0;
var visibility = false;





btn.addEventListener("click", () => {

    
    const input = document.getElementById("a").value;
    const word = document.getElementById("b").value;

    const newinput = String(input).toLowerCase();
    const newword = String(word).toLowerCase();

    const wlength = Math.floor(newword.length - 1);

    




    console.log(wlength)

    

    
    

    
    
    function stars(){

        for (let x = 0; x < wlength; x++) {

            var cat = "love";
            var dog = "love";
            var code = "love";
            if(cat == dog == code){
                cat = dog = code = "love";
            }

            
        
        

            if(x + 1 == wlength){
                if(newinput.includes(newword)){

                    // lots of the posting stuff is under here 

                    var container = document.createElement("div");
                    container.id = "container";

                    credit.style.top = 150 + "%";

                    document.body.appendChild(container);

                    container.innerText = newinput.split(word[x]).join('*'); 
                    

                    
                } else {

                    check++;

                    var error = document.createElement("p");
                    error.id = "error";
    
                    error.innerText = "The text doesn't include the word you want to filter";
                    document.body.appendChild(error);

                    setInterval(() => {

                        

                        document.body.removeChild(error)
                        
                    }, 3000);



                    


                    

                    
                }
                
            }
            
        }


    }

    stars()

    
    
    
    
    
    
});




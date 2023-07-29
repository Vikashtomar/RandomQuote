 function myfun()
    {
        const quotes = [  "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"];
        const randomQuote = Math.floor(Math.random() * quotes.length);
        let quote = document.getElementById("para");
        quote.innerHTML = quotes[randomQuote];
        console.log("hello there")
    }

    // fetch("https://fakestoreapi.com/products")

    // let a =  fetch("https://fakestoreapi.com/products")
    //   .then((res)=>res.json())
    //   .then((res)=>{
    //     console.log(res)
    //   })

    //   let b = a.map((val)=>{
    //     // return val["title"] + ":"+ val['price'];
     
    //    (val.description)
    //   })

    //   document.write(b).value

    
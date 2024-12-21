let input= document.getElementById('inputBox');
let buttons= document. querySelectorAll('button'); //shob button wala tag ke dibe amader 'buttons' variable e 

let string="";//storing result
let arr=Array.from(buttons);//buttons variable er shob niye array dibe

arr.forEach(button =>{
    button.addEventListener('click', (e)=>{//jotobar button e click korbo totbar 'e' pass korbe
        //e.target.innerHTML mane 'e' er vitore ki ache
        if(e.target.innerHTML == '='){//button equal hole to result dekhabe
            string= eval(string);//evaluate ekta inbuilt function, ja mathematically evaluate kore return kore ja kichui string er moddhe ache
            input.value=string;//string er value input box e pabo
        }

        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);//0 no index theke last er ager index porjonto substring return
            input.value=string;
        }

        else{
            //jodi equal na hoy tahole string er moddhe add hote thakbe
            string+= e.target.innerHTML;
            input.value=string;//input box e string ta dekhabe
        }
    })
})
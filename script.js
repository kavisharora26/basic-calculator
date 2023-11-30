let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((item)=>{
    item.addEventListener('click', (e)=>{
        //console.log(e.target);
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'pi'){
            string = 3.141592654;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.replace(/\d$/, ''); //for replacing last character we use "/\d$/, ''" only for number
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML; //innerHTML is used to create dynamic html webpages
            document.querySelector('input').value = string;
        }
    })
    // item.addEventListener('keydown', function(k)=>{
    //     if(k.keycode.innerHTML == 'enter'){
    //         string = eval(string);
    //         document.querySelector('input').value = string;
    //     }
    //     else if(k.keycode.innerHTML == 'backspace'){
    //         string = "";
    //         document.querySelector('input').value = string;
    //     }
    //     else if(k.keycode.innerHTML == 'pi'){
    //         string = 3.141592654;
    //         document.querySelector('input').value = string;
    //     }
    //     else if(k.keycode.innerHTML == 'DEL'){
    //         string = string.replace(/\d$/, ''); //for replacing last character we use "/\d$/, ''" only for number
    //         document.querySelector('input').value = string;
    //     }
    //     else{
    //         string = string + k.keycode.innerHTML; //innerHTML is used to create dynamic html webpages
    //         document.querySelector('input').value = string;
    //     }
    // })
})
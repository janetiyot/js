let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) =>{


        switch(e.target.innerText){
            case 'c':
                display.innerText = '';
                break;
                case '%':
            default:
                display.innerText += e.target.innerText

        }
            
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
    })
})
/*
    function        =       friståend och gobalt deklarerad
    metod           =       ingår i en instansierad klass

    DEKLARERING AV FUNCTIONER
    --------------------------------------------------------
    function() {}               =   anonymous function
    function name() {}          =   function

    ()=>{}                      = anonymous arrow function (ES&)
    const name = () => {}       = arrow function (ES 6)
*/

function welcomeMessage(name){
    console.log("välkommen ${name}")
}

const welcomeMessage = (name) =>{
    console.log(" du är inte välkommen ${name}")
}
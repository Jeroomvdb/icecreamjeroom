const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;


slide = (direction) => {

    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    )
}


function displayflavorcup()
{
    var flavorcup = document.querySelector(".flavorcup");
    flavorcup.style.display = "block";
}



/*setTimeout(()=>{nodisplayflavorcup},5000);*/

function nodisplayflavorcup()
{
    var flavorcup = document.querySelector(".flavorcup");
    flavorcup.style.display = "none";
}



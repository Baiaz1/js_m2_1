const input = document.getElementById("press");
const area = document.querySelector(".area");
let space = true;

const arrayofPhones = [
    {
        country: "Kg",
        code: "+996",
    },
    {
        country:"Uz",
        code: "+998",
    },
];

let phoneMatched = "";
input.addEventListener("input", () =>{
    phoneMatched = input.value.match(/[+0-9]+/);

    for(key in arrayofPhones){
        if(arrayofPhones[key].code === phoneMatched[0]){
            area.innerHTML = arrayofPhones[key].country;
        }
    }
    console.log(phoneMatched);
})



const input=document.querySelector('#input')
const output=document.querySelector('#output')
const searchSmall=document.querySelector('#smallbtn')
const searchBig=document.querySelector('#bigbtn')
const menu=document.querySelector('#hammenu')
const closeMenu=document.querySelector('#close')
searchBig.addEventListener('click',async()=>{
    const val=input.value;
    if(val===""){
        alert("Please enter a word")
    }
    else{
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
        let meaning= await fetch(url);
        meaning=await meaning.json();
        console.log("meaning",meaning[0]['meanings'][0]["definitions"][0]["definition"])
        output.textContent=meaning[0]['meanings'][0]["definitions"][0]["definition"]
    }
})
searchSmall.addEventListener('click',async()=>{
    const val=input.value;
    if(val===""){
        alert("Please enter a word")
    }
    else{
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
        let meaning= await fetch(url);
        if(meaning.status==404){
            alert("Please enter a valid word")
        }
        else{
            meaning=await meaning.json();
            console.log("meaning",meaning[0]['meanings'][0]["definitions"][0]["definition"])
        output.textContent=meaning[0]['meanings'][0]["definitions"][0]["definition"]
        }
        
    }
        
})
function show(){
     togg.classList.toggle("hidden")
    
}




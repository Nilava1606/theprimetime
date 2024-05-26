//https://newsdata.io/api/1/news?apikey=pub_44181f07270e1fff48b1426343327d38bb758&q=news 
const find=document.getElementById('find')
const quick=document.getElementById('quick')
const searchbtn=document.getElementById('searchbtn')
const headlines=document.getElementById('headlines')
const headtag=document.getElementById('headtag')
const newsheadlines=document.getElementById('newsheadlines')
let inputText
const APIKEY = "be8a681cd0c9488888fac256c65a55e3";
let cardData=document.querySelector('.cardData')
const  getData = async(input) =>{
    console.log('input'+input)
    let res1= await fetch(`https://newsapi.org/v2/everything?q=${input}&lang=en&apikey=${APIKEY}`);
    let res2= await fetch(`https://newsapi.org/v2/top-headlines?q=${input}&country=in&apikey=${APIKEY}`);
    let jsonData1= await res1.json()
    let jsonData2= await res2.json()
    console.log(jsonData1.articles)
    console.log(jsonData2.articles)
    headlines.innerHTML=""
    jsonData2.articles.forEach(function(article2){
        if(article2.urlToImage!=null && article2.source.id!=null){
        console.log(article2)
        let divs2=document.createElement("div")
        divs2.classList.add("card")
        headlines.appendChild(divs2)
        const date=new Date(article2.publishedAt).toLocaleString("en-US",{
            timeZone:"Asia/Jakarta"
        })
        divs2.innerHTML=`
        <div class="hover:border-transparent hover:border-4">
        <img class="shadow-2xl h-[250px] w-[420px] rounded-xl" src="${article2.urlToImage}" alt="Content">
        <h6 class="pl-2 font-semibold text-base pt-2">${article2.source.name} . ${date}</h6>
        <h3 class="pl-2 font-bold text-lg font-font-ubuntu pt-2 h-[70px] line-clamp-2">${article2.title}</h3>
        <p class="pl-2 pt-6 pb-8 h-[80px] text-base font-font-ubuntu truncate">${article2.description}</p>
        </div>
        `
        }
    })
    cardData.innerHTML=""
    jsonData1.articles.forEach(function(article1){        
        if(article1.urlToImage!=null && article1.source.id!=null){
        console.log(article1)
        let divs1=document.createElement("div")
        divs1.classList.add("card")
        cardData.appendChild(divs1)
        const date=new Date(article1.publishedAt).toLocaleString("en-US",{
            timeZone:"Asia/Jakarta"
        })
        divs1.innerHTML=`
        <div class="hover:border-transparent hover:border-4">
        <img class="shadow-2xl h-[250px] w-[420px] rounded-xl" src="${article1.urlToImage}" alt="Content">
        <h6 class="pl-2 font-semibold text-base font-font-ubuntu pt-2">${article1.source.name} . ${date}</h6>
        <h3 class="pl-2 font-bold text-lg pt-2 h-[70px] line-clamp-2">${article1.title}</h3>
        <p class="pl-2 pt-6 pb-8 h-[80px] text-base font-font-ubuntu truncate">${article1.description}</p>
        </div>
        `
        }
})
   
}
getData('INDIA') 
//if(inputText!=null){
//console.log('inputText'+inputText)
searchbtn.addEventListener('click',(e)=>{
    headtag.classList.add("hidden")
    e.preventDefault()
    inputText=find.value;
    console.log('inputText'+inputText)
    getData(inputText)
})  
//}
function show(){
    togg.classList.toggle("hidden")
}
function bind(id){
    getData(id)
}
function hidehead(){
    headlines.classList.add("hidden")
    headtag.classList.add("hidden")
}
function showhead(){
    headlines.classList.remove("hidden")
    headtag.classList.remove("hidden")
}

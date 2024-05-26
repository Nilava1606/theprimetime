const newsheadlines=document.getElementById('newsheadlines')
const newschannels=document.getElementById('newschannels')
const APIKEY = "be8a681cd0c9488888fac256c65a55e3";
const  getData2 = async(input) =>{
    let res= await fetch(`https://newsapi.org/v2/top-headlines?q=${input}&country=in&apikey=${APIKEY}`);
    let jsonData= await res.json()
    //console.log('111'+jsonData.articles)
    newschannels.classList.add('hidden')
    newsheadlines.innerHTML=""
    jsonData.articles.forEach(function(article){
        //console.log('article.urlToImage'+article.urlToImage)
       // console.log('article.source.name='+article.source.name)
        if(article.urlToImage!=null && article.source.name!=null){
        //console.log('article'+article)
        let newdiv=document.createElement("div")
        newdiv.classList.add("card")
        newsheadlines.appendChild(newdiv)
        const date=new Date(article.publishedAt).toLocaleString("en-US",{
            timeZone:"Asia/Jakarta"
        })
        newdiv.innerHTML=`
        <div class="hover:border-transparent hover:border-4">
        <img class="shadow-2xl h-[250px] w-[420px] rounded-xl" src="${article.urlToImage}" alt="Content">
        <h6 class="pl-2 font-semibold text-base pt-2">${article.source.name} . ${date}</h6>
        <h3 class="pl-2 font-bold text-lg font-font-ubuntu pt-2 h-[70px] line-clamp-2">${article.title}</h3>
        <p class="pl-2 pt-6 pb-8 h-[80px] text-base font-font-ubuntu truncate">${article.description}</p>
        </div>
        `
        }
    })
}
function displayhead(id){
    getData2(id)
}
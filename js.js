const apikey = "b56a4b5077a2459a9976d6b0d367d13a" ;

const blogContainer = document.getElementById("bolg-container") ; 
async function fatchRandomNews(){
    try{
        const apiUrl=`https://newsapi.org/v2/top-headlines?country=us$pageSize=10$apikey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }catch(error){
            console.error("Error fetching random news" , error) ;
            return[] ;
        }
}
function displayBlogs(articles){
    blogContainer.innerHTML= "" ;
            articles.forEach((articles) =>{
            const blogCard = document.createElement("div");
            blogCard.className.add("blog-card");
            const img = document.createElement("img") ;
            img.Src= articles.urlToImage;
            img.alt = articles.title;
            const title = document.createElement("h2");
            const truncatedTitle = articles.title.length>30?articles.title.slice(0,30) + "...." : articles.title ;
            title.textContent=truncatedTitle;
            const description = document.createElement("p");
            const truncateDes = artic.description.length> 120?articles.description.slice(0,120) + "...." : articles.description ;
            description.textContent=truncateDes;

            blogCard.appendChild(img);
            blogCard.appendChild(title);
            blogCard.appendChild(description);
            blogContainer.appendChild(blogCard);
    });
}
(async()=>{
    try{
        const articles = await fatchRandomNews();
        displayBlogs (articles);
        } catch(error){
            console.error("Error fetching random news" , error);
        }
})
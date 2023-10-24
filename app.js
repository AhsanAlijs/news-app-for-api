const form = document.querySelector('#form');
const search = document.querySelector('#search')
const card = document.querySelector('.card-main');
let allNews;
function renderNews() {
    allNews.forEach((item) => {
        card.innerHTML += ` 
        <div class="main-java">
        
        <div class="card mt-3 main-js" style="width: 18rem;">
        <img src="${item.urlToImage ? item.urlToImage : 'https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM='}" class="card-img-top" alt="..." class="js-img">
        <div class="card-body">
            <h5 class="card-title">${item.title}e</h5>
            <p class="card-text">${item.description.slice(0, 30)}......</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

        </div>

        `
    })
}
async function getNews() {
    const searchValue = search.value;
    try {

        const news = await fetch(`https://newsapi.org/v2/everything?q=karachi&apiKey=b91dd222bbd54278a82017a30d38b181`);
        const res = await news.json()
        console.log(res.articles);
        allNews = res.articles;
        renderNews();
    } catch (error) {
        console.log(error);
    }
}

getNews()
const form = document.querySelector('#form');
const input = document.querySelector('.search');
const div = document.querySelector('#main-news');
const text = document.querySelector('.load');
const found = document.querySelector('.error');
let newsArry = [];
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    text.style.display = 'block'
    try {
        const news = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=05922d575a1c461290656cb5d727d1d7`);
        // console.log(news.data.articles);
        newsArry = news.data.articles
        console.log(newsArry);
        newsArry.forEach((item, index) => {
            div.innerHTML += `
            <div class="news">
            <img src="${item.urlToImage ? item.urlToImage : `https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}" alt="" class="news-img">
            <h2>${item.title.slice(0, 10)}....</h2>
            <p>${item.description.slice(0, 50)}....</p>
            <button class="card-btn" onclick="oneNews(${index})">Read More</button>
            </div>
            `
        })
    } catch (error) {
        alert('Sorry not News Found')

    }
    finally {
        text.style.display = 'none'
        input.value = ''
    }

});
function oneNews(index) {
    let newsData = newsArry[index];
    console.log(newsData);
    const news = JSON.stringify(newsData)
    localStorage.setItem('newsData', news)
    window.location = 'fullnews.html'
}


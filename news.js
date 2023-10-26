const div = document.getElementById('new-news');
let retString = localStorage.getItem("newsData");
let newsArry = JSON.parse(retString);
let news=[];
news=newsArry
console.log(news);

div.innerHTML=`
<div class="new-newss">
<img src="${news.urlToImage}" class="img">
<p class="time disc"> publishedAt: ${news.publishedAt}</p>
<h2>Title:${news.title}</h2>
<ul>
<li class="disc"><span class="under">Description:</span>
<ul><p>${news.description}</p></ul>
</li>
<li class="disc"><span class="under">Content:</span>
<ul>${news.content}</ul>
</li>
<li class="disc"><span class="under">Url:</span>
<ul><a href="${news.url}">${news.url}</a></ul>
</li>
<li class="disc"><span class="under">Source:</span>
<ul>${news.source.id},${news.source.name}</ul>
</li>
</ul>
<a href="./index.html" class="home">Go to home </a>
</div>
`
window.onbeforeunload = function () {
    localStorage.setItem('newsData', JSON.stringify(news));
};
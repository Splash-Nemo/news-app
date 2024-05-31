let headlineItems = document.querySelectorAll('.headline-item'); // Select all headline items
let shortHeadlineItems = document.querySelectorAll('.short-headline-item');
let nextButton = document.querySelector('.next-button');

let currentIndex = 0; // Track the index of the current active element
let pointer = 1;

nextButton.addEventListener('click', () => {
    // Rearrange the headline items based on the current index
    let container = document.querySelector('.headlines-list');
    // headlineItems[currentIndex].classList.add('change');
    container.appendChild(headlineItems[currentIndex]);
    
    // Increment currentIndex, and if it exceeds the length of headlineItems, loop back to 0
    currentIndex = (currentIndex + 1) % headlineItems.length;
    headlineItems[currentIndex].classList.add('change');
    headlineItems[currentIndex].style.zIndex = '100';

    // Handling for the main headline items
    if (currentIndex > 0) {
        let abc = currentIndex - 1;
        headlineItems[abc].classList.remove('change');
        headlineItems[abc].style.zIndex = '99';
    } else if (currentIndex === 0) {
        let abc = headlineItems.length - 1;
        headlineItems[abc].classList.remove('change');
        headlineItems[abc].style.zIndex = '99';
    }

    // Handling for the short headline items
    let current = shortHeadlineItems[pointer];
    let beforeIndex = pointer - 1;

    current.style.backgroundColor = 'red';
    if (beforeIndex < 0)
        shortHeadlineItems[shortHeadlineItems.length - 1].style.backgroundColor = '#22282E';
    else
        shortHeadlineItems[beforeIndex].style.backgroundColor = '#22282E';
    pointer = (pointer + 1) % shortHeadlineItems.length;
});

window.onload = function(){
const apiKey = '876719291248422db7bd388300201a4c';

const fetchHeadlineData = async(category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles;
}

// For getting headline NEWS

const headlineItemsHeading = document.querySelectorAll('.headline-heading');
const headlineItemsThumbs = document.querySelectorAll('.headline-thumb');
const headlineItemsAuthor = document.querySelectorAll('.author');
const shortHeadingItemsHeading = document.querySelectorAll('.short-headings');
const shortHeadingsDate = document.querySelectorAll('.short-headline-date');

let headlineItemsCount = 0;
let i=0;

const getHeadlines = (data) =>{
    while(headlineItemsCount<headlineItems.length && i<data.length){
        if(data[i].urlToImage && data[i].author!=null){
            headlineItemsHeading[headlineItemsCount].textContent = data[i].title;
            headlineItemsAuthor[headlineItemsCount].innerHTML = `<i class="fa-solid fa-minus"></i> ${data[i].author} <div style= "margin: 1rem;"></div>`;
            headlineItemsThumbs[headlineItemsCount].src = data[i].urlToImage;
            shortHeadingItemsHeading[headlineItemsCount].textContent = data[i].title;
            // shortHeadingsDate[headlineItemsCount].textContent = data[i].publishedAt;

            headlineItemsCount+=1;
            i+=1;
        }else{
            i+=1;
        }
    }
}

//Latest NEWS

const latestNewsItems = document.querySelectorAll('.latest-news-item');
const latestNewsHeading = document.querySelectorAll('.latest-news-heading');
const latestNewsDate = document.querySelectorAll('.latest-news-date');
const latestNewsThumb = document.querySelectorAll('.news-thumb');

let LatestNewscount = 0;
let LatestNewsi = 0;

const fetchLatestData = async(category,pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const latestdata = await fetch(url)
    const response = await latestdata.json()
    console.log(response);
    return response.articles;
}

const getLatestNews = (latestdata) => {
    while(LatestNewscount<latestNewsItems.length && LatestNewsi<latestdata.length){
        if(latestdata[LatestNewsi].urlToImage){
            latestNewsHeading[LatestNewscount].textContent = latestdata[LatestNewsi].title;

            const publishedAt = new Date(latestdata[LatestNewsi].publishedAt);
            const formattedDate = publishedAt.toISOString().split('T')[0];
            latestNewsDate[LatestNewscount].innerHTML = `${formattedDate} <span class="red-color" style="color: red;">|</span>`;

            latestNewsThumb[LatestNewscount].src = latestdata[LatestNewsi].urlToImage;

            LatestNewscount+=1;
            LatestNewsi+=1;
        }else{
            LatestNewsi+=1;
        }
    }
}

//Popular News

const fetchPopularNews = async(category,pageSize) => {
    const url = `https://newsapi.org/v2/everything?q=${category}&sortby=popularity&apiKey=${apiKey}`;
    const popularData = await fetch(url)
    const response = await popularData.json()
    console.log(response)
    return response.articles;
}

const popularNewsItems = document.querySelectorAll('.popular-news-item');
const popularNewsThumb = document.querySelectorAll('.popular-news-thumb');
const popularNewsDate = document.querySelectorAll('.popular-news-date');
const popularNewsHeading = document.querySelectorAll('.popular-news-heading');

let popularNewsCount = 0;
let popularNewsi = 0;

const getPopularNews = (popularData) =>{
    while(popularNewsCount < popularNewsItems.length && popularNewsi < popularData.length){
        if(popularData[popularNewsi].urlToImage){
            popularNewsThumb[popularNewsCount].src = popularData[popularNewsi].urlToImage;
            popularNewsHeading[popularNewsCount].textContent = popularData[popularNewsi].title;
            
            const publishedAt = new Date(popularData[popularNewsi].publishedAt);
            const formattedDate = publishedAt.toISOString().split('T')[0];
            popularNewsDate[popularNewsCount].innerHTML = `${formattedDate} <span class="red-color" style="color: red;">|</span>`;

            popularNewsCount+=1;
            popularNewsi +=1;
        }else{
            popularNewsi+=1;
        }
    }
}

//Science News

const fetchScienceNews = async (category,pageSize) =>{
    const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&q=${category}&apiKey=${apiKey}`
    const scienceData = await fetch(url);
    const response = await scienceData.json();
    console.log(response)
    return response.articles;
}

const scienceNewsItem = document.querySelectorAll('.science-news-item');
const scienceNewsThumb = document.querySelectorAll('.science-news-thumb');
const scienceNewsDate = document.querySelectorAll('.date');
const scienceHeadline = document.querySelectorAll('.headline');

let scienceNewsCount = 0;
let scienceNewsi = 0;

const getScienceNews = (scienceData)=>{
    while(scienceNewsCount < scienceNewsItem.length && scienceNewsi < scienceData.length){
        if(scienceData[scienceNewsi].urlToImage){
            scienceNewsThumb[scienceNewsCount].src = scienceData[scienceNewsi].urlToImage;
            scienceHeadline[scienceNewsCount].textContent = scienceData[scienceNewsi].title;

            const publishedAt = new Date(scienceData[scienceNewsi].publishedAt);
            const formattedDate = publishedAt.toISOString().split('T')[0];
            scienceNewsDate[scienceNewsCount].innerHTML = `${formattedDate} <span class="red-color" style="color: red;">|</span>`;

            scienceNewsCount+=1;
            scienceNewsi+=1;
        }else{
            scienceNewsi+=1;
        }
    }
}

// Health News

const fetchHealthNews = async (category,pageSize) => {
    const url = `https://newsapi.org/v2/everything?sources=medical-news-today,healthline&pageSize=${pageSize}&apiKey=${apiKey}`;
    const healthData = await fetch(url)
    const response = await healthData.json()
    console.log(response)
    return response.articles
}

const healthNewsItem =  document.querySelectorAll('.health-news-item')
const healthThumb = document.querySelectorAll('.health-news-thumb')
const healthDate = document.querySelectorAll('.health-date')
const healthHeadline = document.querySelectorAll('.health-headline')

let healthNewsCount = 0;
let healthNewsi = 0;

const getHealthNews = (healthData) => {
    while(healthNewsCount < healthNewsItem.length && healthNewsi < healthData.length){
        if(healthData[healthNewsi].urlToImage){
            healthThumb[healthNewsCount].src = healthData[healthNewsi].urlToImage
            healthHeadline[healthNewsCount].textContent = healthData[healthNewsi].title
            
            const publishedAt = new Date(healthData[healthNewsi].publishedAt);
            const formattedDate = publishedAt.toISOString().split('T')[0];
            healthDate[healthNewsCount].innerHTML = `${formattedDate} <span class="red-color" style="color: red;">|</span>`;

            console.log(healthNewsi);
            healthNewsCount+=1;
            healthNewsi+=1;
        }else{
            healthNewsi+=1;
        }
    }
}

// business News
const fetchbusinessNews = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/everything?sources=bloomberg,financial-times&pageSize=${pageSize}&apiKey=${apiKey}`;
    const businessData = await fetch(url);
    const response = await businessData.json();
    console.log(response);
    return response.articles;
}

const businessNewsItems = document.querySelectorAll('.business-news-item');
const businessNewsThumb = document.querySelectorAll('.business-news-thumb');
const businessNewsDate = document.querySelectorAll('.politcial-date');
const businessNewsHeading = document.querySelectorAll('.business-headline');

let businessNewsCount = 0;
let businessNewsi = 0;

const getbusinessNews = (businessData) => {
    while (businessNewsCount < businessNewsItems.length && businessNewsi < businessData.length) {
        if (businessData[businessNewsi].urlToImage) {
            businessNewsThumb[businessNewsCount].src = businessData[businessNewsi].urlToImage;
            businessNewsHeading[businessNewsCount].textContent = businessData[businessNewsi].title;

            const publishedAt = new Date(businessData[businessNewsi].publishedAt);
            const formattedDate = publishedAt.toISOString().split('T')[0];
            businessNewsDate[businessNewsCount].innerHTML = `${formattedDate} <span class="red-color" style="color: red;">|</span>`;

            businessNewsCount += 1;
            businessNewsi += 1;
        } else {
            businessNewsi += 1;
        }
    }
}

// Sports News
const fetchSportsNews = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/everything?sources=espn,bbc-sport&pageSize=${pageSize}&apiKey=${apiKey}`;
    const sportsData = await fetch(url);
    const response = await sportsData.json();
    console.log(response);
    return response.articles;
}

const sportsNewsItems = document.querySelectorAll('.sports-news-item');
const sportsNewsThumb = document.querySelectorAll('.sports-news-thumb');
const sportsNewsDate = document.querySelectorAll('.sports-date');
const sportsNewsHeading = document.querySelectorAll('.sports-headline');

let sportsNewsCount = 0;
let sportsNewsi = 0;

const getSportsNews = (sportsData) => {
    while (sportsNewsCount < sportsNewsItems.length && sportsNewsi < sportsData.length) {
        if (sportsData[sportsNewsi].urlToImage) {
            sportsNewsThumb[sportsNewsCount].src = sportsData[sportsNewsi].urlToImage;
            sportsNewsHeading[sportsNewsCount].textContent = sportsData[sportsNewsi].title;

            const publishedAt = new Date(sportsData[sportsNewsi].publishedAt);
            const formattedDate = publishedAt.toISOString().split('T')[0];
            sportsNewsDate[sportsNewsCount].innerHTML = `${formattedDate} <span class="red-color" style="color: red;">|</span>`;

            sportsNewsCount += 1;
            sportsNewsi += 1;
        } else {
            sportsNewsi += 1;
        }
    }
}

fetchHeadlineData('general',10).then(getHeadlines)
fetchLatestData('general',10).then(getLatestNews)
fetchPopularNews('general',10).then(getPopularNews)
fetchScienceNews('science',10).then(getScienceNews)
fetchHealthNews('health',10).then(getHealthNews)
fetchbusinessNews('business',10).then(getbusinessNews)
fetchSportsNews('sports',10).then(getSportsNews)
}
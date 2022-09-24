
let bitcoinCollapse = document.getElementById("bitcoin");
const bitcoinApi = async () => {
    try{
        let getURL = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5084503198c4f7ba1f22cbc87c817e6');
        let getApi = getURL.json();
        console.log(getApi);
        if(getURL){
            getApi.then((data)=>{
                for(let key in data.articles){
                    console.log(data.articles[key].content);
                    let card = document.createElement("div");//card for each article
                    card.setAttribute("class", "card cards");
                    let card_img = document.createElement("img");
                    card_img.setAttribute("class", "card-img-top");
                    card_img.setAttribute("alt" , "Card image");
                    card_img.setAttribute("src" , data.articles[key].urlToImage);
                    card.appendChild(card_img);
                    let card_body = document.createElement("div");
                    card_body.setAttribute("class", "card-body");
                    card.appendChild(card_body);
                    let card_title = document.createElement("h4");
                    card_title.setAttribute("class", "card-title");
                    card_title.textContent = data.articles[key].title;
                    card_body.appendChild(card_title);
                    let authorHeading = document.createElement("h6");
                    authorHeading.setAttribute("class", "author-heading")
                    if(data.articles[key].author === null){
                        authorHeading.textContent = "Author: "+ "Unknown";
                    }else{
                        authorHeading.textContent = `Author: ${data.articles[key].author}`;
                    }
                    card_body.appendChild(authorHeading);
                    let publishedTime = document.createElement("p");
                    publishedTime.setAttribute("class", "published-time");
                    publishedTime.textContent = `Published at: ${data.articles[key].publishedAt}`
                    card_body.appendChild(publishedTime);
                    let sourceText = document.createElement("p");
                    sourceText.setAttribute("class", "source-text");
                    sourceText.textContent = `Source: ${data.articles[key].source.name}`
                    card_body.appendChild(sourceText);
                    let card_text = document.createElement("div");
                    card_text.setAttribute("class", "card-text");
                    card_text.textContent = data.articles[key].content;
                    card_body.appendChild(card_text);
                    let description = document.createElement("p");
                    description.setAttribute("class", "description-text");
                    description.textContent = `Description: ${data.articles[key].description}`;
                    card_body.appendChild(description);
                    let card_btn = document.createElement("a");
                    card_btn.setAttribute("class", "btn btn-primary");
                    card_btn.setAttribute("target", "_blank");
                    card_btn.textContent = "See More Info"
                    card_btn.setAttribute("href", data.articles[key].url);
                    card_body.appendChild(card_btn);
                    bitcoinCollapse.appendChild(card);
                }
            }
            );
        }
    }
    catch{
        console.log(error);
    }
}
bitcoinApi();

let appleCollapse = document.getElementById("apple");
const appleApi = async () => {
    try{
        let getURL = await fetch('https://newsapi.org/v2/everything?q=apple&from=2022-09-22&to=2022-09-22&sortBy=popularity&apiKey=4d1ca8151aa34b1dbba1750ce27eab34');
        let getApi = getURL.json();
        console.log(getApi);
        if(getURL){
            getApi.then((data)=>{
                for(let key in data.articles){
                    console.log(data.articles[key].content);
                    let card = document.createElement("div");
                    card.setAttribute("class", "card cards");
                    let card_img = document.createElement("img");
                    card_img.setAttribute("class", "card-img-top");
                    card_img.setAttribute("alt" , "Card image");
                    card_img.setAttribute("src" , data.articles[key].urlToImage);
                    card.appendChild(card_img);
                    let card_body = document.createElement("div");
                    card_body.setAttribute("class", "card-body");
                    card.appendChild(card_body);
                    let card_title = document.createElement("h4");
                    card_title.setAttribute("class", "card-title");
                    card_title.textContent = data.articles[key].title;
                    card_body.appendChild(card_title);
                    let authorHeading = document.createElement("h6");
                    authorHeading.setAttribute("class", "author-heading")
                    if(data.articles[key].author === null){
                        authorHeading.textContent = "Author: "+ "Unknown";
                    }else{
                        authorHeading.textContent = `Author: ${data.articles[key].author}`;
                    }
                    card_body.appendChild(authorHeading);
                    let publishedTime = document.createElement("p");
                    publishedTime.setAttribute("class", "published-time");
                    publishedTime.textContent = `Published at: ${data.articles[key].publishedAt}`
                    card_body.appendChild(publishedTime);
                    let sourceText = document.createElement("p");
                    sourceText.setAttribute("class", "source-text");
                    sourceText.textContent = `Source: ${data.articles[key].source.name}`
                    card_body.appendChild(sourceText);
                    let card_text = document.createElement("div");
                    card_text.setAttribute("class", "card-text");
                    card_text.textContent = data.articles[key].content;
                    card_body.appendChild(card_text);
                    let description = document.createElement("p");
                    description.setAttribute("class", "description-text");
                    description.textContent = `Description: ${data.articles[key].description}`;
                    card_body.appendChild(description);
                    let card_btn = document.createElement("a");
                    card_btn.setAttribute("class", "btn btn-primary");
                    card_btn.setAttribute("target", "_blank");
                    card_btn.textContent = "See More Info"
                    card_btn.setAttribute("href", data.articles[key].url);
                    card_body.appendChild(card_btn);
                    appleCollapse.appendChild(card);

                }
            }
            );
        }
    }
    catch{
        console.log(error);
    }
}
appleApi();




let techCrunchCollapse = document.getElementById("tech-crunch");
const techCrunchApi = async () => {
    try{
        let getURL = await fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=4d1ca8151aa34b1dbba1750ce27eab34');
        let getApi = getURL.json();
        console.log(getApi);
        if(getURL){
            getApi.then((data)=>{
                for(let key in data.articles){
                    console.log(data.articles[key].content);
                    let card = document.createElement("div");
                    card.setAttribute("class", "card cards");
                    let card_img = document.createElement("img");
                    card_img.setAttribute("class", "card-img-top");
                    card_img.setAttribute("alt" , "Card image");
                    card_img.setAttribute("src" , data.articles[key].urlToImage);
                    card.appendChild(card_img);
                    let card_body = document.createElement("div");
                    card_body.setAttribute("class", "card-body");
                    card.appendChild(card_body);
                    let card_title = document.createElement("h4");
                    card_title.setAttribute("class", "card-title");
                    card_title.textContent = data.articles[key].title;
                    card_body.appendChild(card_title);
                    let authorHeading = document.createElement("h6");
                    authorHeading.setAttribute("class", "author-heading")
                    if(data.articles[key].author === null){
                        authorHeading.textContent = "Author: "+ "Unknown";
                    }else{
                        authorHeading.textContent = `Author: ${data.articles[key].author}`;
                    }
                    card_body.appendChild(authorHeading);
                    let publishedTime = document.createElement("p");
                    publishedTime.setAttribute("class", "published-time");
                    publishedTime.textContent = `Published at: ${data.articles[key].publishedAt}`
                    card_body.appendChild(publishedTime);
                    let sourceText = document.createElement("p");
                    sourceText.setAttribute("class", "source-text");
                    sourceText.textContent = `Source: ${data.articles[key].source.name}`
                    card_body.appendChild(sourceText);
                    let card_text = document.createElement("div");
                    card_text.setAttribute("class", "card-text");
                    card_text.textContent = data.articles[key].content;
                    card_body.appendChild(card_text);
                    let description = document.createElement("p");
                    description.setAttribute("class", "description-text");
                    description.textContent = `Description: ${data.articles[key].description}`;
                    card_body.appendChild(description);
                    let card_btn = document.createElement("a");
                    card_btn.setAttribute("class", "btn btn-primary");
                    card_btn.setAttribute("target", "_blank");
                    card_btn.textContent = "See More Info"
                    card_btn.setAttribute("href", data.articles[key].url);
                    card_body.appendChild(card_btn);
                    techCrunchCollapse.appendChild(card);

                }
            }
            );
        }
    }
    catch{
        console.log(error);
    }
}
techCrunchApi();
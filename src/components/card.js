import axios from 'axios';

const Card = (article) => {

    const card = document.createElement('div'); 
    const cardHeadline = document.createElement('div');
    const cardAuthor= document.createElement('div');
    const imgContainer= document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    card.addEventListener('click', ()=>{
        console.log(article.headline)
    })

    cardHeadline.textContent = article.headline;
    img.setAttribute('src', article.authorPhoto);
    authorName.textContent = `Author: ${article.authorName}`;

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    cardAuthor.appendChild(authorName);
    imgContainer.appendChild(img);

    return card; }
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardAppender = (selector) => {

    const cardsContainer = document.querySelector(selector);

    axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res)=>{
    console.log('Article',res.data.articles);
    const dataObj = res.data.articles
    for (const [key, value] of Object.entries(dataObj)) {
      value.forEach(article => {
        cardsContainer.append(Card(article));
      });
    }
    })

    .catch((err)=>{
    console.log('error', err)
    });

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }

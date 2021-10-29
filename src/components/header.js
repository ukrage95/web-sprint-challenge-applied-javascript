
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {

    const header = document.createElement("div"); // creating our elements
    const hDate = document.createElement("span");
    const hTitle = document.createElement("h1");
    const hTemp = document.createElement("span");

    header.classList.add('header'); // setting class names
    hDate.classList.add('date');
    hTemp.classList.add('temp');

    hDate.textContent = date; // adding content 
    hTitle.textContent = title; 
    hTemp.textContent = temp;

    header.appendChild(hDate); // structuring by appending 
    header.appendChild(hTitle);
    header.appendChild(hTemp);

    return header;
  }

  const headerAppender = (selector) => {
    const hContainer = document.querySelector(selector);
    hContainer.append(Header('Lambda Times', 'October 29, 2021', '77F'));
  }


export { Header, headerAppender }

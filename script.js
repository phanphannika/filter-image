let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');
console.log(list);
console.log(itemBox);

for (let i=0; i<list.length; i++) {
  list[i].addEventListener('click', (event)=> {
    for(let j=0; j<list.length; j++) {
      list[j].classList.remove('active');
    }
    event.target.classList.add('active');

    let dataFilter = event.target.getAttribute('data-filter');
    for (let k=0; k<itemBox.length; k++){
      itemBox[k].classList.remove('hide');
      itemBox[k].classList.add('hide');
      
      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active');
      }
    }

  })
}


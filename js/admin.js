
const edit = document.getElementsByClassName('btn-5');


const addproduct = () => {
  let productAll1 = JSON.parse(localStorage.getItem('allproducts'));
    let newproduct = {
      id: document.getElementById('p-id').value,
      name: document.getElementById('p-name').value,
      image: document.getElementById('p-image').value,
      price: document.getElementById('p-price').value
    }
    saveNewProduct(newproduct);
}

const saveNewProduct = (newproduct) => {
  let productAll1 = JSON.parse(localStorage.getItem('allproducts'));
  productAll1.push(newproduct);
  console.log(productAll1);
  localStorage.setItem('allproducts', JSON.stringify(productAll1));
}



let productAll1 = JSON.parse(localStorage.getItem('allproducts'));

const productt =() => {
    let html='';
    let numberOfProducts = 0;
    productAll1.forEach(item => {
      html +=
      `
      <div class="col-4 editbutton" >
        <img src="${item.image}" alt="">
        <span class="hidden-id">${item.id}</span>
        <h4>${item.name}</h4>
        <div class="rating">
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star-o"></i>
        </div>
        <p>${item.price}</p>
        <center>
        <button class="btn-5">Edit</button>
        </center>
      </div>
      `;
      numberOfProducts++;
    });
    document.querySelector('#prod').innerHTML += html;
};

productt();


const editscreen = () => {
  for(var i=0; i<edit.length; i++) {
    var cartBtn = edit[i];
    cartBtn.addEventListener('click', (e) => {
      let productToBeUpdated = {
        image: e.target.parentElement.parentElement.children[0].src,
        id: e.target.parentElement.parentElement.children[1].textContent,
        title: e.target.parentElement.parentElement.children[2].textContent,
        price: e.target.parentElement.parentElement.children[4].textContent,
      }
       localStorage.setItem('productToBeUpdated', JSON.stringify(productToBeUpdated));
       window.location.href='editproduct.html';
    })
  }
}
editscreen();

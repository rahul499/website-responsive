

const productList=[
  {
     id: 1,
     name: 'Salmon Fish Seafood',
     image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
     price: 'Rs. 800.00'
  },
  {
    id: 2,
    name: 'Meal Asparagus Dish',
    image: 'https://cdn.pixabay.com/photo/2016/04/04/17/22/meal-1307604_960_720.jpg',
    price: 'Rs. 1200.00'
  },
  {
    id: 3,
    name: 'Tomatoes Eggs Toast',
    image: 'https://cdn.pixabay.com/photo/2014/09/15/16/53/tomatoes-447170_960_720.jpg',
    price: 'Rs. 500.00'
  },
  {
    id: 4,
    name: 'Stir Fried Tofu with Rice',
    image: 'https://drop.ndtv.com/albums/COOKS/chinese-vegetarian/tofurice.jpg',
    price: 'Rs. 900.00'
  },
  {
    id: 5,
    name: 'Shitake Fried Rice',
    image: 'https://drop.ndtv.com/albums/COOKS/chinese-vegetarian/mushroom-rice_625x350_61424324920.jpg',
    price: 'Rs. 1000.00'
  },
  {
    id: 6,
    name: 'Cupcake Muffin Cake',
    image: 'https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204_960_720.jpg',
    price: 'Rs. 750.00'
  },
  {
    id: 7,
    name: 'Skewers Food Party',
    image: 'https://cdn.pixabay.com/photo/2016/02/18/08/39/skewers-1206687__340.jpg',
    price: 'Rs. 1100.00'
  },
  {
    id:8,
    name: 'Beans Fried Eggs',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984__340.jpg',
    price: 'Rs. 400.00'
  },
  {
    id:9,
    name: 'Dinner Meal Chicken',
    image: 'https://cdn.pixabay.com/photo/2016/03/09/12/07/dinner-1246287__340.jpg',
    price: 'Rs. 1200.00'
  },
  {
    id:10,
    name: 'Desserts Quark Glasses',
    image: 'https://cdn.pixabay.com/photo/2021/01/10/08/02/desserts-5904325__340.jpg',
    price: 'Rs. 850.00'
  },
  {
    id:11,
    name: 'Sandwich Toast Food',
    image: 'https://cdn.pixabay.com/photo/2017/05/10/17/27/sandwich-2301387__340.jpg',
    price: 'Rs. 600.00'
  }
];

let productAll2 = JSON.parse(localStorage.getItem('allproducts'));
const setProducts = () => {
    if(!productAll2) {
       localStorage.setItem('allproducts', JSON.stringify(productList));
    }
}
setProducts();

const display = () => {
    let html='';
    let html2='';

    for(let i=0;i<=2;i++) {
        html +=
        `
        <div class="col-4 editbutton" >
          <img src="${productAll2[i].image}" alt="">
          <span class="hidden-id">${productAll2[i].id}</span>
          <h4>${productAll2[i].name}</h4>
          <div class="rating">
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star-o"></i>
          </div>
          <p>${productAll2[i].price}</p>
          <center>
          <button class="btn-2">Add to Cart</button>
          </center>
        </div>
        `;
    }

    for(let i=3;i<productAll2.length;i++) {
        html2 +=
        `
        <div class="col-4 editbutton" >
          <img src="${productAll2[i].image}" alt="">
          <span class="hidden-id">${productAll2[i].id}</span>
          <h4>${productAll2[i].name}</h4>
          <div class="rating">
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star-o"></i>
          </div>
          <p>${productAll2[i].price}</p>
          <center>
          <button class="btn-2">Add to Cart</button>
          </center>
        </div>
        `;
    }
    document.querySelector('#liner1').innerHTML += html;
    document.querySelector('#liner2').innerHTML += html2;
};

display();


const numberOfCartItem = () => {
  let cartt = JSON.parse(localStorage.getItem('productInCart'));
  var numm=0;
  cartt.forEach(item => {
      numm = item.quantity + numm;
  });
  document.querySelector('#numm').innerHTML = numm;
}
numberOfCartItem();

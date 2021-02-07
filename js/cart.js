
const products=[];
const button = document.getElementsByClassName('btn-2');
let cartItems = JSON.parse(localStorage.getItem('productInCart'));

for(var i=0; i<button.length; i++) {
  var cartBtn = button[i];
  cartBtn.addEventListener('click', (e) => {
    let product = {
      image: e.target.parentElement.parentElement.children[0].src,
      id: e.target.parentElement.parentElement.children[1].textContent,
      title: e.target.parentElement.parentElement.children[2].textContent,
      price: e.target.parentElement.parentElement.children[4].textContent,
      totalPrice: parseInt(e.target.parentElement.parentElement.children[4].textContent.substr(4)),
      quantity: 1
    }
     storeItem(product);

  })
}

const storeItem = (product) => {

  if(cartItems === null) {
    products.push(product);
  } else {
    cartItems.forEach(item => {
      if(product.id == item.id) {
        product.quantity = item.quantity+=1;
        product.totalPrice = item.totalPrice += product.totalPrice;
      } else {
        products.push(item);
      }
    });
    products.push(product);
  }
  localStorage.setItem('productInCart', JSON.stringify(products));
  window.location.reload();
}

const productOperations = () => {
    let html='';
    let html2='';
    let html3='';
    let html4='';
    let total=0;
    let totalwithtax = 0;
    let tax=0;
    let numberOfCartItems = 0;
    if(cartItems.length>0) {
    document.querySelector('.emptycart').style.display="none";
    cartItems.forEach(item => {
      html +=
      `
      <tr>
        <td>
          <div class="cart-info">
            <img src="${item.image}" width="160px" height="120px" style= "margin-right: 30px; border: 2px solid #ff523b;" alt="">
            <div>
              <span class="hidden-id">${item.id}</span>
              <p>${item.title}</p>
              <small>Price: ${item.price}</small>
              <button class="btn-4" >Delete</button>
            </div>
          </div>
        </td>
        <td class="center">${item.quantity}</td>
        <td class="right">Rs. ${item.totalPrice}</td>
      </tr>
      `;
      numberOfCartItems = item.quantity + numberOfCartItems;
      total += item.totalPrice;
    });

    if(total<2000){
      tax= 0.03*total;
      totalwithtax= tax+total;
    } else if(total>2000 && total<=5000)
    {
      tax= 0.05*total;
      totalwithtax= tax+total;
    } else {
      tax= 0.1*total;
      totalwithtax= tax+total;
    }
    html2 += `
    <tr>
      <td>SubTotal</td>
      <td class="right">Rs. ${total}</td>
    </tr>
    <tr>
      <td>Delivery Charges</td>
      <td class="right">Rs. ${tax}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td class="right">Rs. ${totalwithtax}</td>
    </tr>
    <tr>
     <td colspan="2"><button class="btn-3" onclick="window.open('https://paytm.com/')">Proceed</button></td>
    </tr>
    `;
    document.querySelector('#displayCartItems').innerHTML += html;
    document.querySelector('#displayTotal').innerHTML = html2;

  } else {
      document.querySelector('.emptycart').style.display="block";
      document.querySelector('#displayCartItems').style.display="none";
      document.querySelector('.total-price').style.display="none";
  }
      document.querySelector('#no').innerHTML = numberOfCartItems;
};

productOperations();




const del = document.getElementsByClassName('btn-4');


const deleteFromStorage = () => {
  for(var i=0; i<del.length; i++) {
    var delBtn = del[i];
    delBtn.addEventListener('click', (e) => {
       cartItems.forEach( function(item) {
            let index = search(item.id);
            if(index!=-1) {
               cartItems.splice(index,1);
               localStorage.setItem('productInCart', JSON.stringify(cartItems));
               location.reload();
            }
      })
    })
  }

}

 deleteFromStorage();


const search = (id) => {
    for(let i=0;i<cartItems.length;i++)
    {
      if(id == cartItems[i].id) {
        return i;
      }
    }
    return -1;
}


 const clearCart = () => {
   localStorage.setItem('productInCart', JSON.stringify([]));
   location.reload();
 }

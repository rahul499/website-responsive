
let productDetailsUpdate = JSON.parse(localStorage.getItem('productToBeUpdated'));

const setFields = () => {
  document.getElementById('pid').value = productDetailsUpdate.id,
  document.getElementById('pname').value = productDetailsUpdate.title,
  document.getElementById('pimage').value = productDetailsUpdate.image,
  document.getElementById('pprice').value = productDetailsUpdate.price
};

setFields();


const updateProduct = () => {
//   let productAll = JSON.parse(localStorage.getItem('allproducts'));
//   let updatedProduct = {
//     pid: document.getElementById('pid').value,
//     pname: document.getElementById('pname').value,
//     pimage: document.getElementById('pimage').value,
//     pprice: document.getElementById('pprice').value
//   }
// for (var i = 0; i < productAll.length; i++) {
//    if(updatedProduct.pid === productAll[i].id){
//      productAll[i] = updatedProduct;
//    }
// }
// localStorage.setItem("allproducts", JSON.stringify(productAll));
}

const deleteProduct = () => {
     let productAll = JSON.parse(localStorage.getItem('allproducts'));
     let productDetailsUpdate = JSON.parse(localStorage.getItem('productToBeUpdated'));
     for (var i = 0; i < productAll.length; i++) {
    if(productDetailsUpdate.id === productAll[i].id){
     productAll.splice(i,1);
     localStorage.setItem('allproducts', JSON.stringify(productAll));
     localStorage.setItem('productToBeUpdated', JSON.stringify(''));
     }
   }
   window.location.href='admin.html';
}

// an array with all of our cart items
var cartData=  {
  cart : []
}


var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
      $(".cart-list" ).empty();
      
      var source = $('#cart-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(cartData);
      console.log(newHTML);
      var total = 0;
      for (var i = 0; i < cartData.cart.length; i++) {
        total += cartData.cart[i].price;
      }
      console.log(total);
      $('.cart-list').append(newHTML);
      
      $('.total').html(total);
      reduceDuplic();
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cartData.cart.push(item);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
    
    deleteData();
    $(".cart-list" ).empty();
    $(".total" ).empty();
    $(".total" ).append(0);
   }



function deleteData(){
  cartData.cart = [];
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart ").toggle();
});

var itemId=0;
$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page

  itemId++;
  var itemName = $(this).closest('.item').data().name;
  var itemPrice = $(this).closest('.item').data().price;
  var item = { text: itemName, price: itemPrice, id: itemId };
  
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

//When a user clicks remove:
// delete item from array
// remove from cart

// bind dynamically added remove-item button to cart-list
$('.cart-list').on("click", ".remove-item",getItemId);


//get deleted item id

function getItemId() {
  var deletedItemId = $(this).closest('li').data().id;
  console.log(deletedItemId);
  deleteItem(deletedItemId);
}

// search item in the array and delete item from array
function deleteItem(id) {
  for (var i=0; i<cartData.cart.length; i++) {
    if (cartData.cart[i].id == id) {
      // delete cart[i]
      cartData.cart.splice(i, 1);
      updateCart();
    } 
  }
}


// var str = "The rain in SPAIN stays mainly in the plain"; 
// var res = str.match(/ain/g);

var itemCount = 1;
function reduceDuplic() {

 for (var i=0; i<cartData.cart.length; i++) {
   for (var j=0; j<cartData.cart.length; j++) {
        // if cartData.cart[text] match
    if (cartData.cart[j].text === cartData.cart[j].text) {
      itemCount++;
    }

  }
 }
}

reduceDuplic();


//  local storage commit
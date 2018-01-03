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

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var itemName = $(this).closest('.item').data().name;
  var itemPrice = $(this).closest('.item').data().price;
  var item = { text: itemName, price: itemPrice };
  
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();


//Add the item + the price to the shopping cart div when you click "Add to Cart"... Use Handlebars.


// // add data to array
// function addData(postText,num) {
//   var postsObject = { "text": postText, "id": num };
//   posts.push(postsObject);
// };

// // render array 

// function publish() {
//   $("p").remove();
//   $(".remove").remove();
//   for (var i=0; i<posts.length; i++) {
     
//       var postText = posts[i].text;
//       var postId = posts[i].id;
//       $('.posts').append('<p data-id=' + postId + '>' + postText + '<button type="button" class="remove">  REMOVE  </button>'+ '</p>');

//   }
// }
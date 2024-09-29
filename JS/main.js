$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 20){
      $('#header').css('background-color','#858585');
      $('#header').css('margin-top','-0px')
    }
    else{
      $('#header').css('background-color','#');
      $('#header').css('margin-top','-4px')
    }
  })
})


$(document).ready(function(){
  $('.search').click(function(){
      $('#phone-header').css('display','none');
      $('#phone-head').css('display','none')
      $('#header').css('display','none');
      $('.search-panel').css('display','block');
  })
})




function openNav() {
document.getElementById("mySidenav").style.opacity = "1";
document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("mySidenav").style.opacity = "0";

}


$(document).ready(function(){
  $('#bars').click(function(){
      $('#bars').css('display','none');
      $('#arrow').css('display','block');
  });
  $('#arrow').click(function(){
    $('#bars').css('display','block');
    $('#arrow').css('display','none');
});
});


function openTab(evt,tabName){
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');

  for(i=0;i<tabcontent.length;i++){
      tabcontent[i].style.display='none';
      
  }

  tablinks = document.getElementsByClassName('tablinks');
  for(i=0;i<tablinks.length;i++){
      tablinks[i].className = tablinks[i].className.replace(" active","");
  }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";


}

$(document).ready(function(){

  $(".counter-s").each(function(){
      var cnt = $(this),

      countTo = cnt.attr("data-count");
      
      $({countNum:cnt.text()}).animate({
        countNum:countTo
      },
      {
          duration:5000,
          easing:'linear',
          step:function(){
              cnt.text(Math.floor(this.countNum));
          },
          complete:function(){
              cnt.text(this.countNum)
          }
      }
      )
  })
})

document.addEventListener('DOMContentLoaded', () => {
  function updateSubtotal(row) {
      const price = parseFloat(row.querySelector('td:nth-child(3)').innerText.replace('$', ''));
      const quantity = parseInt(row.querySelector('.quantity').innerText);
      const subtotalCell = row.querySelector('.subtotal');
      subtotalCell.innerText = `$${(price * quantity).toFixed(2)}`;

      updateTotal();
  }

  function changeQuantity(event) {
      const button = event.target;
      const quantityElement = button.parentElement.querySelector('.quantity');
      let quantity = parseInt(quantityElement.innerText);

      if (button.classList.contains('increase')) {
          quantity++;
      } else if (button.classList.contains('decrease') && quantity > 1) {
          quantity--;
      }

      quantityElement.innerText = quantity;

      const row = button.closest('tr');
      updateSubtotal(row);
  }

  function updateTotal() {
      let total = 0;
      document.querySelectorAll('.subtotal').forEach(subtotal => {
          total += parseFloat(subtotal.innerText.replace('$', ''));
      });
      document.getElementById('total-amount').innerText = `$${total.toFixed(2)}`;
  }

  document.querySelectorAll('.quantity-btn').forEach(button => {
      button.addEventListener('click', changeQuantity);
  });

  document.getElementById('add-to-cart').addEventListener('click', () => {
      const cartBody = document.getElementById('cart-body');
      const newRow = cartBody.rows[0].cloneNode(true);

      newRow.querySelector('.quantity').innerText = '1';
      newRow.querySelector('.subtotal').innerText = '$10.00';

      newRow.querySelectorAll('.quantity-btn').forEach(button => {
          button.addEventListener('click', changeQuantity);
      });

      cartBody.appendChild(newRow);
      updateTotal();
  });

  document.getElementById('checkout').addEventListener('click', () => {
      window.location.href = 'checkout.html'; // Checkout səhifəsinə keçid
  });

  updateTotal();
});


const accordion = document.getElementsByClassName('cont');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
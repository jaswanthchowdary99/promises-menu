let open = document.querySelector(".open");
let close = document.querySelector(".close");
let side_bar = document.querySelector(".side-bar");

open.addEventListener("click",function(){
    close.style.display = 'block';
    side_bar.style.display = "flex";
})

close.addEventListener("click",function(){
    close.style.display = 'none';
    side_bar.style.display = "none";
})


const FetchData = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
document.addEventListener("DOMContentLoaded", function(){

  let cardSection = document.querySelector(".card-section");

  function getMenu(){
    
    fetch(FetchData).then(response => {
      return response.json();
    }).then(data => {
      data.forEach((items) => {
        cardSection.innerHTML += `
        <div class="card">
            <img src="https://s3-alpha-sig.figma.com/img/25d6/cb93/f7841f10f589d812f29695ad4fde3fa2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaNveJJ2~QcEBUsa1fY92pPrDLUaXMLuTnfVfJpWjwf7pJOhU0R2LAQ-UFvVvN9WmigC2HQ1jl8bv7IY6RyCOBYoToiLxNE~8fzdi36GFTZiM4MXCUusN-qAdaUUDmbLCTZlaUXsTXKUxagvSt7pcnftIqiV9Hk4o3pSAHs3ItgYKegU7lbQqofUBvLCMkSluzze78ny3LZb9LsKFjG44~Mx2M7eaYddFl3npGwxVLfYlpj4xOGdVbx8nBsLGEnZv0218wRYYSbxcZpKEI-4ao5fEVlUFuTgzbBVTWO1u5aC3E-mo76Ben7ZazdOOWgq8wQHcNo53BJwKBu5GpHyTQ__" alt="burger" class="card-main-img">
            <div class="card-content">
                <div class="card-start-content">
                    <p class="food-name">${items.name}</p>
                    <p class="cost">$${items.price}/-</p>
                </div>
                <div class="card-end-content">
                    <img src="Group 4.svg" alt="">
                </div>
            </div>
        </div>
        `
      })
    })
  }

  getMenu();


  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = [
          { name: "Cheese Burger", price: 5.99 },
          { name: "Veggie Burger", price: 6.49 },
          { name: "Bacon Burger", price: 7.49 },
          { name: "Chicken Burger", price: 6.99 },
          { name: "Mushroom Burger", price: 6.79 },
          { name: "Double Cheese Burger", price: 8.99 },
          { name: "BBQ Burger", price: 7.99 },
          { name: "Fish Burger", price: 7.29 },
          { name: "Turkey Burger", price: 6.49 },
          { name: "Spicy Burger", price: 7.49 }
        ];
  
        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
  
        resolve(randomBurgers);
      }, 2500);
    });
  }
  


  function orderPrep(){
    return new Promise(resolve => {
      setTimeout(() => {
        let orderPrepObj = {order_status:true, paid:false}
        resolve(orderPrepObj);
      },1500);
    })
  }


  function payOrder(){
    return new Promise(resolve => {
      setTimeout(() => {
        let payOrderObj = {order_status:true, paid:true};
        resolve(payOrderObj);
      }, 1000);
    })
  }


  function thankyou(){
    alert('thankyou for eating with us today!');
  }


  function main() {
    takeOrder()
      .then(order => {
        console.log('Your Order:', order);
        return orderPrep(); 
      })
      .then(orderStatus => {
        console.log('Order Preparation Status:', orderStatus);
        return payOrder(); 
      })
      .then(payOrderStatus => {
        console.log('Payment Status:', payOrderStatus);
        if (payOrderStatus && payOrderStatus.paid) {
          thankyou();
        }
      })
  }
  

  main();
})

function secondScreen(){
  let hideMainImg = document.querySelector('.main_hero_img');
  hideMainImg.style.display = 'none';
};

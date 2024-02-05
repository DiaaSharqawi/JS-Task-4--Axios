
let productsDetailsContainer = document.querySelector('.products_details')

function swiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}


async function getPostAxios(){

    try{
    const urlParams = new URLSearchParams(window.location.search);
    const idFromURL= urlParams.get('product_id');
    //console.log(idFromURL)
    const response = await axios.get(`https://dummyjson.com/products/${idFromURL}`);
    console.log(response)
    const productDetails = await response.data;


    const images= productDetails.images.map(function(image){
      return `<div class="swiper-slide">
      <img src="${image}"/>
    </div>`
    }).join('')
    
    const result = `
    
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
         ${images}
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
    <div class="product_info">
      <h2>${productDetails.title}</h2>
      <p>${productDetails.description}</p>
      <p>price : ${productDetails.price} $</p>
      <p> discountPercentage : ${productDetails.discountPercentage} %</p>
      <p> rating : ${productDetails.rating}</p>
      <p> stock: ${productDetails.stock}</p>
      <p>brand : ${productDetails.brand}</p>
      <p>category : ${productDetails.category}</p>
      <a href="index.html">Back to home </a>
    </div>

    
  `;

    productsDetailsContainer.innerHTML=result;
    swiper();

    }
    catch(error){
        console.log(error)
    }
}




getPostAxios();



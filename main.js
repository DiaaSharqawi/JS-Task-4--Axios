let productsContiner = document.querySelector('.products');

async function getPostAxios(){

    try{
    const response = await axios.get('https://dummyjson.com/products');
    const data =  response.data;
    const productsObjectArray = data.products;
    
    const result = productsObjectArray.map(function(element){
       const product = `
       <div class="product"> 
       <div class="product_img"> 
                <img src="${element.thumbnail}"/>
        </div>
        <div class="product_info">
                <h2>${element.title} </h2>
                <p>${element.description}</p>
                <p>${element.price} $</p>
                <p>${element.brand}</p>
        </div>


        <div class="details">
        <a href='details.html?product_id=${element.id}'>details</a>
        </div>
        </div>
                `;
        return product;

    }).join('')

    productsContiner.innerHTML=result
}
catch(error){
    console.error(error)
}
}

getPostAxios()
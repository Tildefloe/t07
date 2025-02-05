const listContainer = document.querySelector(".grid_articals");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

console.log(category);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) => ` 
          
      <article class="product_container">
      <a href="product.html?id=${product.id}">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="Billede af produkt"
            />
             <p class="soldout_hidden ${
               product.soldout && "soldout"
             }">Sold Out</p>
             <p class="discount_hidden ${
               product.discount && "discount"
             }">On Sale</p>
            <h3 class="productdisplayname">${product.productdisplayname}</h3>
            <h5>DKK ${product.price},-</h5>
            <p class="discount_hidden ${product.discount && "discount"}"> -${
        product.discount
      }% </p>
            </a>
          </article>
          `
    )
    .join("");
  listContainer.innerHTML = markup;
}

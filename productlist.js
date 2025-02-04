const listContainer = document.querySelector(".grid_articals");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

console.log(category);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += ` 
          
      <article class="leggings">
      <a href="product.html?id=${product.id}">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="Billede af produkt"
            />
            <h3 class="productdisplayname">${product.productdisplayname}</h3>
            <h5>DKK ${product.price},-</h5>
            </a>
          </article>`;
    })
    .join("");
  listContainer.innerHTML = markup;
}

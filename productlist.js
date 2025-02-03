console.log("script hentet...");

const listContainer = document.querySelector(".grid_articals");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) => ` 
          
      <article class="leggings">
      <a href="product.html">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="Billede af produkt"
            />
            <h3 class="productdisplayname">${product.productdisplayname}</h3>
            <h5>DKK ${product.price},-</h5>
            </a>
          </article>
          `
    )
    .join("");
  listContainer.innerHTML = markup;
}

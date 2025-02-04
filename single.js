const produkt_billedeContainer = document.querySelector(".produkt_billede");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then(showProduct);

function showProduct(data) {
  console.log(data);
  produkt_billedeContainer.innerHTML = `
   <div>
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
          alt="Billede af produkt"/>
    </div>
     <div>
        <h3>${data.productdisplayname}</h3>
        <p><strong>Kategori:</strong>${data.category}</p>
        <p><strong>Type:</strong> ${data.articletype}</p>
        <p><strong>Pris:</strong> DKK ${data.price},-</p>
      </div>
      <aside>
        <label for="size">Vælg størrelse</label>
        <select id="size">
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button class="tilfoj_til_kurv">Tilføj til kurv</button>
      </aside>
      `;
}

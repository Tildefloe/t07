const produkt_billedeContainer = document.querySelector(".produkt_billede");
const productId = 1530;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then(showProduct);

function showProduct(data) {
  produkt_billedeContainer.innerHTML = `
    <article class="produkt_billede">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp"
          alt="Billede af produkt"/>
      </article>
      <div>
        <h3 class="leggings_produkt">Leggings</h3>
        <p><strong>Farve:</strong> Grå</p>
        <p><strong>Artikelnummer:</strong> 1573</p>
        <p><strong>Pris:</strong> DKK 495,-</p>
      </div>
      `;
}

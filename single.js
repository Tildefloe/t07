const produkt_billedeContainer = document.querySelector(".produkt_billede");
const productId = 1535;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then(showProduct);

function showProduct(data) {
  produkt_billedeContainer.innerHTML = `
   
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
          alt="Billede af produkt"/>
    
     <div>
        <h3>${data.productdisplayname}</h3>
        <p><strong>Kategori:</strong>${data.category}</p>
        <p><strong>Type:</strong> ${data.articletype}</p>
        <p><strong>Pris:</strong> DKK ${data.price},-</p>
      </div>
      `;
}

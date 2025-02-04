const categoriesContainer = document.querySelector(".grid_kategorier");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(categories) {
  console.log("min data er:", categories);
  const markup = categories
    .map(
      (category) =>
        `<li><a href="productlist.html?category=${category.category}">${category.category}</a> </li>`
    )
    .join("");
  categoriesContainer.innerHTML = markup;
}

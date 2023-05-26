const categoryItem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryItem.length}`);


categoryItem.forEach((item) => {
    const listItemTitle = item.querySelector("h2").textContent;
    const listCategoryItemCount = item.querySelectorAll("li").length;

    console.log(`Category: ${listItemTitle}`);
    console.log(`Elements: ${listCategoryItemCount}`);
});
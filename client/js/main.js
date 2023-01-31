// console.log(data);

const mainProduct = document.querySelectorAll(".mainProduct");

data.products.map(item => {
  let name = item.name;
  let thumbnail = item.image.thumbnail;
  let price = item.price;
  let alt = item.image.alt;
  let salePrice2 = item.salePrice === 0 ? price : item.salePrice;
  let saleRatio = item.saleRatio * 100 !== 0 ? item.saleRatio * 100 + "%" : "";

  let productTemplate = `
    <div class="product">
      <a href="#">
        <div class="product-image-container">
          <img src="/market-lion/client/assets/${thumbnail}"
            class="product-img "
            alt="${alt}"
          />
        </div>
        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          <div>
            <div class="product-price">
              <div>
                <span class="discount-rate">${saleRatio}</span>
                <span class="discount-price">${salePrice2 + " 원"}</span>
              </div>
              <div>
                <span class="original-price">${(price =
                  item.salePrice === 0 ? "" : price + " 원")}</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      <button type="button" class="productCart">
        <img
          src="/market-lion/client/assets/icons/Icon/Cart.svg"
          class="cart-img"
          alt="장바구니 이미지"
        />
      </button>
    </div>
  `;

  mainProduct[0].insertAdjacentHTML("beforeend", productTemplate);
  mainProduct[1].insertAdjacentHTML("beforeend", productTemplate);
});

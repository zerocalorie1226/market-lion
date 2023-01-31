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

/*   let num = 0;
  let productList={"tangtang","ubuho","kangnam","bacon"}
  let abc = document.getElementsByClassName("tangtang-sale")[0];
  console.log(abc); */

/*   function classTemplate() {
    
  }

  let infoSaleClass = document.getElementsByClassName(product + "-sale")[0]; //=> discount-rate tangtang-sale
  let infoPriceClass = document.getElementsByClassName(product + "-price")[0];
  if (saleRatio === 0) {
    infoSaleClass.className += " a11y-hidden"; //=>discount-rate tangtang-sale a11y-hiidden
    infoPriceClass.className += " a11y-hidden";
    salePrice = price;
  } */

//saleRatio 0이 아니면 세일된 값 표시
//saleRatio 0이면 원래값 표시

/* function createProduct( ) {
  return `
  <div class="product">
  <a href="">
    <div class="product-image-container">
      <img
        src="/market-lion/client/assets/${}"
        class="product-img tangtang-img"
        alt="상품 이미지 "
      />
    </div>
    <div class="product-info">
      <h3 class="product-name tangtang-name"></h3>
      <div>
        <div class="product-price">
          <div>
            <span class="discount-rate tangtang-sale"></span>
            <span class="discount-price tangtang-salePrice"></span>
          </div>
          <div>
            <span class="original-price tangtang-price"></span>
          </div>
        </div>
      </div>
    </div>
  </a>

  <button type="button" class="productCart">
    <img
      src="/market-lion/client/assets/main/visual/Cart.png"
      class="cart-img"
      alt="장바구니 이미지"
    />
  </button>
  </div>
  `;
} */

/* function productMaking(num, product) {


  let address = "/market-lion/client/assets/";
  let img = data.products[num]["image"].thumbnail;
  let name = data.products[num]["name"];
  let saleRatio = data.products[num]["saleRatio"] * 100;
  let salePrice = data.products[num]["salePrice"];
  let price = data.products[num]["price"];

  img = address + img;

  document.getElementsByClassName(product + "-img")[0].setAttribute("src", img);
  document.getElementsByClassName(product + "-name")[0].innerHTML = name;
  document.getElementsByClassName(product + "-sale")[0].innerHTML =
    saleRatio + "%";
  document.getElementsByClassName(product + "-salePrice")[0].innerHTML =
    salePrice + " 원";
  document.getElementsByClassName(product + "-price")[0].innerHTML =
    price + " 원";
}

//for each
productMaking(0, "ubuho");
productMaking(1, "tangtang");
productMaking(3, "kangnam");
productMaking(4, "bacon");

//함수 1개의 기능만

//카드를 만들어 => 카드를 만드는 함수(HTML) => 템플릿 --1
//만든 카드를 HTML로 추가 => 추가해주는 함수 --2
//데이터를 forEach => 데이터를 뽑아오고 그걸 템플릿에 넣어줄 수 있다.
 */

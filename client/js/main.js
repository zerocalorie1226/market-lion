const dataFile = {
  products: [
    {
      id: "product-rksk",
      name: "[대구 반할만떡] 유부호만두",
      description: "유부로 속을 든든히 채운 군만두",
      price: 6900,
      saleRatio: 0.24,
      salePrice: 5244,
      image: {
        thumbnail: "ubuho/thumbnail.jpg",
        view: "ubuho/detail_view.jpg",
        banner: "ubuho/detail_banner.jpg",
        info: "ubuho/detail_info.jpg",
        alt: "유부호 만두",
      },
      stock: 3,
    },
    {
      id: "product-ekfk",
      name: "[풀무원] 탱탱쫄면 (4개입)",
      description: "튀기지 않아 부드럽고 매콤한",
      price: 4980,
      saleRatio: 0,
      salePrice: 0,
      image: {
        thumbnail: "tangtang/thumbnail.jpg",
        view: "tangtang/detail_view.jpg",
        banner: "tangtang/detail_banner.jpg",
        info: "tangtang/detail_info.jpg",
        alt: "풀무원 탱탱쫄면",
      },
      stock: 10,
    },
    {
      id: "product-akqk",
      name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동)",
      description: "매콤달콤한 마력의 밥도둑",
      price: 7900,
      saleRatio: 0.13,
      salePrice: 6800,
      image: {
        thumbnail: "jukkumi/thumbnail.jpg",
        view: "jukkumi/detail_view.jpg",
        banner: "jukkumi/detail_banner.jpg",
        info: "jukkumi/detail_info.jpg",
        alt: "홍대 주꾸미",
      },
      stock: 8,
    },
    {
      id: "product-tkwk",
      name: "[강남면옥] 소갈비찜",
      description: "보는 맛과 먹는 맛 모두 푸짐",
      price: 29800,
      saleRatio: 0,
      salePrice: 0,
      image: {
        thumbnail: "kangnam/thumbnail.jpg",
        view: "kangnam/detail_view.jpg",
        banner: "kangnam/detail_banner.jpg",
        info: "kangnam/detail_info.jpg",
        alt: "강남면옥 소갈비찜",
      },
      stock: 2,
    },
    {
      id: "product-ckzk",
      name: "[Kalry's] 한돈 삼겹 베이컨",
      description: "무항생제 한돈 삼겹살의 고소한 풍미 그대로",
      price: 4500,
      saleRatio: 0.25,
      salePrice: 3375,
      image: {
        thumbnail: "bacon/thumbnail.jpg",
        view: "bacon/detail_view.jpg",
        banner: "bacon/detail_banner.jpg",
        info: "bacon/detail_info.jpg",
        alt: "칼리 한돈 삼겹 베이컨",
      },
      stock: 13,
    },
  ],
};

const json = JSON.stringify(dataFile);
const obj = JSON.parse(json);

function productMaking(num, product) {
  let infoSaleClass = document.getElementById(product + "-sale");
  let infoPriceClass = document.getElementById(product + "-price");

  let addres = "/market-lion/client/assets/";
  let img = obj.products[num]["image"].thumbnail;
  let name = obj.products[num]["name"];
  let saleRatio = obj.products[num]["saleRatio"] * 100;
  let salePrice = obj.products[num]["salePrice"];
  let price = obj.products[num]["price"];

  if (saleRatio === 0) {
    infoSaleClass.className += " a11y-hidden";
    infoPriceClass.className += " a11y-hidden";
    salePrice = price;
  }
  img = addres + img;

  document.getElementById(product + "-img").setAttribute("src", img);
  document.getElementById(product + "-name").innerHTML = name;
  document.getElementById(product + "-sale").innerHTML = saleRatio + "%";
  document.getElementById(product + "-salePrice").innerHTML = salePrice + " 원";
  document.getElementById(product + "-price").innerHTML = price + " 원";
}

productMaking(0, "ubuho");
productMaking(1, "tangtang");
productMaking(3, "kangnam");
productMaking(4, "bacon");

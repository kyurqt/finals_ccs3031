<template>
  <section class="noncoffee" id="noncoffee">
    <div class="container">
      <div class="text">
        <h1>Non-Coffee</h1>
        <p>Matcha, chocolate, and ice-blended drinks for when you want something without coffee.</p>
      </div>
      <h2 class="group">Matcha Series</h2>
      <div class="list">
        <div class="item">
          <img src="@/assets/image/hot-matcha.png" alt="Hot Matcha" />
          <h3>Hot Matcha</h3>
          <p class="desc">Matcha, steamed milk, sweetener & 8oz</p>
          <p class="price">₱140.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/iced-matcha.png" alt="Iced Matcha" />
          <h3>Iced Matcha</h3>
          <p class="desc">Refreshing and vibrant, made with ceremonial grade matcha and chilled milk.</p>
          <p class="price">₱170.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/brown-sugar-matcha.png" alt="Brown Sugar Matcha" />
          <h3>Brown Sugar Matcha</h3>
          <p class="desc">Matcha, homemade brown sugar syrup, milk, 16oz & iced</p>
          <p class="price">₱195.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/white-choco-matcha.png" alt="White Choco Matcha" />
          <h3>White Choco Matcha</h3>
          <p class="desc">Matcha, breve, homemade white choco sauce & 16oz iced</p>
          <p class="price">₱195.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/purple-dream-matcha.png" alt="Purple Dream Matcha" />
          <h3>Purple Dream Matcha</h3>
          <p class="desc">A smooth, earthy, and floral flavor experience.</p>
          <p class="price">₱195.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/matcha-oat.png" alt="Matcha Oat" />
          <h3>Matcha Oat</h3>
          <p class="desc">Matcha, sweetener, oat milk & 16oz iced beverage</p>
          <p class="price">₱205.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/kiwi-matcha.png" alt="Kiwi Matcha" />
          <h3>Kiwi Matcha</h3>
          <p class="desc">Tangy kiwi and earthy matcha for a refreshing, energizing mix.</p>
          <p class="price">₱—</p>
        </div>
      </div>
      <h2 class="group">Signature Chocolate</h2>
      <div class="list">
        <div class="item">
          <img src="@/assets/image/velvet-cloud.png" alt="Velvet Cloud" />
          <h3>Velvet Cloud</h3>
          <p class="desc">A silky blend with the nostalgic taste of vanilla ice cream, topped with cream and white chocolate shavings.</p>
          <p class="price">₱155.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/hot-chocolate.png" alt="Hot Chocolate" />
          <h3>Hot Chocolate</h3>
          <p class="desc">Homemade chocolate sauce, cocoa, hot milk, chocolate shavings & 8oz</p>
          <p class="price">₱130.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/iced-chocolate.png" alt="Iced Chocolate" />
          <h3>Iced Chocolate</h3>
          <p class="desc">Homemade chocolate sauce, cocoa, milk & 16oz iced beverage</p>
          <p class="price">₱155.00</p>
        </div>
      </div>
      <h2 class="group">Frappé</h2>
      <div class="list">
        <div class="item">
          <img src="@/assets/image/oreo-frappe.png" alt="Oreo Frappé" />
          <h3>Oreo Frappé</h3>
          <p class="desc">Combination of houseblend shake, Oreo & whipped cream</p>
          <p class="price">₱220.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/strawberry-creme.png" alt="Strawberry Crème" />
          <h3>Strawberry Crème</h3>
          <p class="desc">Combination of houseblend shake, strawberries & whipped cream. Fruity!</p>
          <p class="price">₱250.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/matcha-creme.png" alt="Matcha Crème" />
          <h3>Matcha Crème</h3>
          <p class="desc">Combination of houseblend shake, matcha & whipped cream. Very creamy!</p>
          <p class="price">₱250.00</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.noncoffee {
  max-width: 100vw;
  min-height: 100vh;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e6eadb;
  padding-bottom: 30px;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 160px 40px 40px 40px;
    gap: 10px;
    text-align: center;

    h1 {
      color: #a8231f;
      font-size: 42px;
    }
    p {
      color: #555555;
    }
  }
  .group {
    padding: 30px 20px 10px 20px;
    color: #a8231f;
    font-size: 26px;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px;
    gap: 20px;
  }
  .item {
    background-color: #a8231f;
    display: flex;
    flex-direction: column;
    border: 1px solid #7d1a17;
    border-radius: 10px;
    padding: 15px;
    gap: 8px;

    h3 {
      font-size: 20px;
      color: #ffffff;
    }
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      background-color: #e9e2d3;
      border-radius: 5px;
    }
    .desc {
      font-size: 14px;
      color: #f5e6e6;
    }
    .price {
      margin-top: auto;
      font-weight: bold;
      color: #ffb3b3;
    }
  }
}

@media (max-width: 768px) {
  .container {
    .text {
      padding: 100px 15px 10px 15px;

      h1 {
        font-size: 32px;
      }
    }
    .group {
      padding: 20px 15px 10px 15px;
      font-size: 22px;
    }
    .list {
      grid-template-columns: 1fr 1fr;
      padding: 15px;
      gap: 12px;
    }
    .item {
      padding: 10px;

      h3 {
        font-size: 16px;
      }
      img {
        height: 130px;
      }
    }
  }
}
</style>
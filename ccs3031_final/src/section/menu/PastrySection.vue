<template>
  <section class="pastry" id="pastry">
    <div class="container">
      <div class="text">
        <h1>Pastry</h1>
        <p>Freshly made waffles, made to order and a perfect size for sharing.</p>
      </div>
      <h2 class="group">Freshly Made Waffles</h2>
      <div class="list">
        <div class="item">
          <img src="@/assets/image/scramble-waffle.png" alt="Scramble Waffle" />
          <h3>Scramble Waffle</h3>
          <p class="desc">Your favorite childhood Ice Scramble turned into a warm, café-made waffle treat.</p>
          <p class="price">₱—</p>
        </div>
        <div class="item">
          <img src="@/assets/image/classic-stack.png" alt="Classic Stack" />
          <h3>Classic Stack</h3>
          <p class="desc">A slightly crispy waffle with maple syrup & softened butter</p>
          <p class="price">₱170.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/cinnamon-crisp.png" alt="Cinnamon Crisp" />
          <h3>Cinnamon Crisp</h3>
          <p class="desc">Crispy cinnamon waffles topped with cream cheese frosting and more cinnamon.</p>
          <p class="price">₱210.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/caramel-pecan-frost.png" alt="Caramel Pecan Frost" />
          <h3>Caramel Pecan Frost</h3>
          <p class="desc">Emman's signature waffle with signature frosting, slow-cooked caramel sauce, and crunchy pecans.</p>
          <p class="price">₱210.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/oreo-cookie-crumble.png" alt="Oreo Cookie Crumble" />
          <h3>Oreo Cookie Crumble</h3>
          <p class="desc">Emman's signature waffles with signature frosting, homemade chocolate sauce, and crushed Oreo cookies.</p>
          <p class="price">₱210.00</p>
        </div>
        <div class="item">
          <img src="@/assets/image/strawberries-and-cream.png" alt="Strawberries and Cream" />
          <h3>Strawberries and Cream</h3>
          <p class="desc">Emman's homemade waffles with signature frosting, fresh strawberry purée, and whipped cream.</p>
          <p class="price">₱—</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pastry {
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
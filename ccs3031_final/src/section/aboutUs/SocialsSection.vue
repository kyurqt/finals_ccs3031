<template>
  <section class="socials" id="socials">
    <div class="container">
      <div class="text">
        <h1>Socials</h1>
        <p>Follow Kape ni Emman for new drinks, updates and café moments.</p>
      </div>
      <div class="list">
        <div class="item">
          <img src="@/assets/image/facebook-logo.png" alt="Facebook logo" />
          <h2>Facebook</h2>
          <p>kapeniemman</p>
        </div>
        <div class="item">
          <img src="@/assets/image/instagram-logo.png" alt="Instagram logo" />
          <h2>Instagram</h2>
          <p>@kapeniemman</p>
        </div>
        <div class="item">
          <img src="@/assets/image/tiktok-logo.png" alt="TikTok logo" />
          <h2>TikTok</h2>
          <p>@kapeniemman</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.socials {
  max-width: 100vw;
  scroll-margin-top: 100px;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6eadb;
  padding: 40px 20px;
  gap: 30px;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;

    h1 {
      color: #a8231f;
      font-size: 42px;
    }
    p {
      font-size: 20px;
      color: #555555;
    }
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    max-width: 1000px;
    width: 100%;
  }
  .item {
    background-color: #a8231f;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #7d1a17;
    border-radius: 10px;
    padding: 30px 20px;
    gap: 10px;
    color: #ffffff;

    img {
      width: 70px;
    }
    h2 {
      color: #ffffff;
    }
  }
}

@media (max-width: 768px) {
  .container {
    min-height: 100vh;
    padding: 100px 20px 40px 20px;

    .text {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
      }
    }
    .list {
      grid-template-columns: 1fr;
    }
    .item {
      padding: 20px;
    }
  }
}
</style>
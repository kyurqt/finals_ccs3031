<template>
  <main class="partnerships-page">
    <div class="simple-container">
      <h1 class="title">Our Delivery Partners</h1>
      <p class="subtitle">Enjoy Kape ni Emman wherever you are. Find us on these delivery apps.</p>

      <div class="logo-showcase">
        <div class="partner-item">
          <div class="image-box">
            <img src="@/assets/image/grab.svg" class="brand-logo" />
          </div>
          <h2>GrabFood</h2>
        </div>

        <div class="partner-item">
          <div class="image-box">
            <img src="@/assets/image/foodpanda.jpg" class="brand-logo" />
          </div>
          <h2>FoodPanda</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.partnerships-page {
  background-color: #e8ebd9;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  text-align: center;
}

.title {
  color: #5c0d11;
  font-size: 40px;
  margin-bottom: 8px;
}

.subtitle {
  color: #4a3e3d;
  font-size: 18px;
  margin-bottom: 64px;
}

.logo-showcase {
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
}

.partner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.image-box {
  background-color: #ffffff;
  width: 160px;
  height: 160px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.brand-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.partner-item h2 {
  color: #7a1c1d;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

@media (max-width: 768px) {
  .partnerships-page {
    display: block;
    padding-top: 220px;
    padding-bottom: 48px;
  }
  
  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 16px; 
    margin-bottom: 40px;
    padding: 0 16px;
  }

  .logo-showcase {
    gap: 32px; 
  }

  .image-box {
    width: 130px; 
    height: 130px;
    padding: 16px;
  }
}
</style>
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
          <h2>foodpanda</h2>
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
  padding: 2rem;
  text-align: center;
}

.title {
  color: #5c0d11;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #4a3e3d;
  font-size: 1.1rem;
  margin-bottom: 4rem;
}

.logo-showcase {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.partner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.image-box {
  background-color: #ffffff;
  width: 160px;
  height: 160px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.brand-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.partner-item h2 {
  color: #7a1c1d;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .partnerships-page {
    display: block;
    padding-top: 220px;
    padding-bottom: 3rem;
  }

  .subtitle {
    font-size: 1rem; 
    margin-bottom: 2.5rem;
    padding: 0 1rem;
  }

  .logo-showcase {
    gap: 2rem; 
  }

  .image-box {
    width: 130px; 
    height: 130px;
    padding: 1rem;
  }
}
</style>
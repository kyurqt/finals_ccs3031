<template>
  <section class="gallery-page">
    <div class="gallery-header">
      <h1 class="title">Our Gallery</h1>
      <p class="subtitle">A glimpse into the daily life at Kape ni Emman.</p>
    </div>

    <div class="image-grid">
      <img src="@/assets/image/gallery1.jpg" alt="Coffee 1" class="gallery-img" />
      <img src="@/assets/image/gallery2.jpg" alt="Coffee 2" class="gallery-img" />
      <img src="@/assets/image/gallery3.jpg" alt="Coffee 3" class="gallery-img" />
      <img src="@/assets/image/gallery4.jpg" alt="Coffee 4" class="gallery-img" />
      <img src="@/assets/image/gallery5.jpg" alt="Coffee 5" class="gallery-img" />
      <img src="@/assets/image/gallery6.jpg" alt="Coffee 6" class="gallery-img" />
    </div>
  </section>
</template>

<style scoped>
.gallery-page {
  padding-top: 160px; 
  padding-bottom: 48px;
  padding-left: 32px;
  padding-right: 32px;
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
  margin-bottom: 48px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto; 
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

@media (max-width: 768px) {
  .gallery-page {
    padding-top: 220px;
  }
}
</style>
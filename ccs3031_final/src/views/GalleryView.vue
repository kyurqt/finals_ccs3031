<template>
  <section class="gallery-page">
    <div class="gallery-header">
      <h1 class="title">Our Gallery</h1>
      <p class="subtitle">A glimpse into the daily life at Kape ni Emman.</p>
    </div>

    <div class="image-grid">
      <!-- Image 1 -->
      <img src="@/assets/image/gallery1.jpg" alt="Coffee 1" class="gallery-img" />
      <!-- Image 2 -->
      <img src="@/assets/image/gallery2.jpg" alt="Coffee 2" class="gallery-img" />
      <!-- Image 3 -->
      <img src="@/assets/image/gallery3.jpg" alt="Coffee 3" class="gallery-img" />
      <!-- Image 4 -->
      <img src="@/assets/image/gallery4.jpg" alt="Coffee 4" class="gallery-img" />
      <!-- Image 5 -->
      <img src="@/assets/image/gallery5.jpg" alt="Coffee 5" class="gallery-img" />
      <!-- Image 6 -->
      <img src="@/assets/image/gallery6.jpg" alt="Coffee 6" class="gallery-img" />
    </div>
  </section>
</template>

<style scoped>
.gallery-page {
  padding: 3rem 2rem;
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
  margin-bottom: 3rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto; 
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

</style>
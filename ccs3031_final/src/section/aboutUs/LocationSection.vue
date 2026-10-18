<template>
  <section class="location" id="location">
    <div class="container">
      <div class="left">
        <p class="small">Visit Us</p>
        <h1>Location</h1>
        <p>Find our café on Sto. Domingo St. in Jaro, a short walk from Central Philippine University (CPU).</p>
      </div>
      <div class="right">
        <div class="info">
          <div class="right-item">
            <h2>Address</h2>
            <p>20 Sto. Domingo St., Jaro, Iloilo City, Iloilo</p>
          </div>
          <div class="right-item">
            <h2>Business Hours</h2>
            <p>Monday to Saturday</p>
            <p>10:00 AM to 7:00 PM</p>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.042450114423!2d122.5522986!3d10.7312094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee5142901641d%3A0xf55dde12c759e447!2skape%20ni%20emman!5e0!3m2!1sen!2sph!4v1792243776056!5m2!1sen!2sph"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location {
  max-width: 100vw;
  scroll-margin-top: 140px;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;

  .left {
    background-color: #7d1a17;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 160px 40px 40px 40px;
    gap: 20px;

    .small {
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #ffb3b3;
    }
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 20px;
    }
  }
  .right {
    background-color: #e6eadb;
    display: flex;
    flex-direction: column;
    padding: 160px 40px 40px 40px;
    gap: 20px;
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .right-item {
    background-color: #a8231f;
    border-left: 5px solid #7d1a17;
    border-radius: 5px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
      color: #ffffff;
      font-size: 26px;
      margin-bottom: 5px;
    }
    p {
      font-size: 18px;
      color: #ffffff;
    }
  }
  .map {
    flex: 1;
    min-height: 300px;
    border: 2px solid #a8231f;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px #7d1a17;

    iframe {
      width: 100%;
      height: 100%;
      min-height: 300px;
      border: 0;
      display: block;
    }
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    min-height: auto;

    .left {
      padding: 30px 20px;

      h1 {
        font-size: 36px;
      }
      p {
        font-size: 18px;
      }
    }
    .right {
      padding: 20px;
    }
    .info {
      grid-template-columns: 1fr;
    }
    .right-item {
      padding: 15px 20px;

      h2 {
        font-size: 22px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
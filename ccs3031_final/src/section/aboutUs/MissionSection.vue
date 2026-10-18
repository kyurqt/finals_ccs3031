<template>
  <section class="mission" id="mission">
    <div class="container">
      <div class="left">
        <h1>Mission</h1>
        <h2>"Not to impress, but to serve."</h2>
        <p>"Whatever you do, work at it with all your heart, as working for the Lord" - Colossians 3:23</p>
      </div>
      <div class="right">
        <div class="right-item">
          <h2>Excellence in Every Cup</h2>
          <p>Colossians 3:23 guides everything, from welcoming customers warmly to serving every cup with care.</p>
        </div>
        <div class="right-item">
          <h2>A Ministry Through Coffee</h2>
          <p>Along with quality drinks, the café shares the Word of God, the love of Christ and real fellowship.</p>
        </div>
        <div class="right-item">
          <h2>Faith and Community</h2>
          <p>Every cup is a chance to build both faith and community, in a quiet space where everyone belongs.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission {
  max-width: 100vw;
  scroll-margin-top: 100px;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;

  .left {
    background-color: #b3282d;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    gap: 20px;

    h1 {
      color: #ffffff;
      font-size: 48px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
      font-style: italic;
      color: #ffb3b3;
    }
  }
  .right {
    background-color: #e6eadb;
    display: grid;
    grid-template-rows: 3, 1fr;
    padding: 40px;
    gap: 20px;
  }
  .right-item {
    background-color: #a8231f;
    border-left: 5px solid #7d1a17;
    border-radius: 5px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    h2 {
      color: #ffffff;
      font-size: 28px;
    }
    p {
      font-size: 20px;
      color: #ffffff;
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
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    }
    .right {
      padding: 20px;
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
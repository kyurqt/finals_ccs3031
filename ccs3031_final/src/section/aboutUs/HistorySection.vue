<template>
  <section class="history" id="history">
    <div class="container">
      <div class="top">
        <p class="small">OUR STORY</p>
        <h1>History</h1>
        <p class="intro">
          Kape ni Emman was started by a Christian couple who stepped out in faith because of their shared
          passion for coffee and ministry.
        </p>
        <p class="owners">— Michael and Jenny Molina, owners</p>
      </div>
      <div class="bottom">
        <div class="step">
          <p class="number">1</p>
          <h2>The Name</h2>
          <p>
            The café was first going to be called Café Immanuel, which means "God with us." They chose Kape
            ni Emman instead, a name that fits their mix of traditional and modern brewing while keeping the
            heart of their faith.
          </p>
        </div>
        <div class="step">
          <p class="number">2</p>
          <h2>A Quiet Opening</h2>
          <p>
            There were no balloons or big celebrations. The café opened with a simple prayer and a
            dedication to God.
          </p>
        </div>
        <div class="step">
          <p class="number">3</p>
          <h2>Two Years of Grace</h2>
          <p>
            On its second anniversary, the café had become a gathering place full of conversations, shared
            prayers and comforted hearts. The owners continue to serve with the same heart they started with.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history {
  max-width: 100vw;
  scroll-margin-top: 140px;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;

  .top {
    background-color: #b3282d;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 160px 40px 40px 40px;
    gap: 15px;

    .small {
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #ffb3b3;
    }
    h1 {
      font-size: 48px;
    }
    .intro {
      max-width: 750px;
      font-size: 22px;
    }
    .owners {
      font-style: italic;
      color: #ffb3b3;
    }
  }
  .bottom {
    background-color: #e6eadb;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 30px 40px 40px 40px;
    gap: 20px;
  }
  .step {
    background-color: #a8231f;
    border: 1px solid #7d1a17;
    border-top: 6px solid #7d1a17;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .number {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ffffff;
      color: #a8231f;
      font-size: 22px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      color: #ffffff;
      font-size: 26px;
    }
    p {
      font-size: 18px;
      color: #ffffff;
    }
  }
}
@media (max-width: 768px) {
  .container {
    .top {
      padding: 40px 20px;

      h1 {
        font-size: 36px;
      }
      .intro {
        font-size: 18px;
      }
    }
    .bottom {
      grid-template-columns: 1fr;
      padding: 20px;
    }
    .step {
      padding: 20px;

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
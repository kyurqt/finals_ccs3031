<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/image/Logo.png" alt=" Logo" />
      <h3>Kape ni Emman</h3>
    </div>

    <div class="menu">
      <RouterLink to="/">Home</RouterLink>
      <div class="dropdown">
        <a @click="scrolltoProductSection('Menu')">Products ⇣</a>

            <div class="submenu">
            <a @click="scrolltoProductSection('coffee')">Coffee</a>
            <a @click="scrolltoProductSection('noncoffee')">non-coffee</a>
            <a @click="scrolltoProductSection('pastry')">Pastries & Snacks</a>
        </div>
      </div>

      <RouterLink to="/about">About Us</RouterLink>
      <RouterLink to="/partnerships">Partnerships</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const scrolltoProductSection = async (id) => {
  if (router.currentRoute.value.path !== '/menu') {
    await router.push('/menu')
  }

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  })
}

</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(101, 11, 11);
  color: white;

  .logo {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 10px;

    img {
      width: 80px;
      height: 100px;
      
    }
  }

  .menu {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 20px;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
    }
  }
}

.dropdown {
  position: relative;
}

.dropdown .submenu {
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: #ffffff;
  width: 120px;
  min-height: 30px;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
}


.dropdown:hover .submenu {
  display: flex;
}

.dropdown .submenu a {
  color: #29452c;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    gap: 10px;

    .logo {
      justify-content: center;
      padding: 0;
    }

    .menu {
      justify-content: center;
      flex-wrap: wrap;
      font-size: 14px;
      padding: 10px;
      gap: 12px;
    }
  }

  .dropdown:hover .submenu {
    display: flex;
  }
}
</style>




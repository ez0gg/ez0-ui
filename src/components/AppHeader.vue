<template>
  <header>
    <div
      class="user-nav flex flex-col text-center"
      :class="{ visible: showUserNav }"
      v-if="$auth.isAuthenticated"
    >
      <router-link :to="`/user/${$store.state.user.username}`"
        >My Profile</router-link
      >
      <router-link to="/my-team">My Team</router-link>
      <a href="#" @click="logout">Log out</a>
    </div>
    <div class="header flex items-center justify-between p-2">
      <div class="nav flex">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.png" />
        </router-link>
        <router-link to="/" class="header-link">Home</router-link>
        <router-link to="/tournaments" class="header-link"
          >Tournaments</router-link
        >
        <router-link to="/info" class="header-link">Info</router-link>
      </div>
      <div class="login mr-4" v-if="!$auth.loading">
        <div
          v-if="$auth.isAuthenticated"
          @click="toggleUserNav()"
          class="flex logged-in items-center"
        >
          <p class="mr-4">{{ $store.state.user.username }}</p>
          <img class="mr-4" :src="$store.state.user.profileImageUrl" />
          <span class="user-nav-toggle icon-chevron-down"></span>
        </div>
        <button
          v-if="!$auth.isAuthenticated"
          class="btn btn-signin mr-3"
          @click="login"
        >
          Sign In
        </button>
        <button
          v-if="!$auth.isAuthenticated"
          class="btn btn-signup"
          @click="login"
        >
          Sign Up
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showUserNav: false,
    };
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    toggleUserNav() {
      this.showUserNav = !this.showUserNav;
    },
  },
  watch: {
    $route() {
      this.showUserNav = false;
    },
  },
};
</script>

<style lang="scss">
.header {
  background: #07070a;
  border-bottom: 1px solid #14171e;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 80px;
}
.logo {
  img {
    height: 80px;
    width: auto;
  }
}
.header-link {
  @apply px-8 font-bold;
  font-size: 18px;
  height: 80px;
  display: flex;
  align-items: center;
  transition: color 0.4s ease-in-out;
  color: #fff;

  &.router-link-exact-active {
    border-top: 3px solid transparent;
    color: $primary-color;
    border-bottom: 3px solid $primary-color;
  }

  &:hover {
    color: $primary-color;
  }
}

.login {
  color: #bbb;

  .user-nav-toggle {
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
}

.user-nav {
  position: fixed;
  right: 16px;
  top: 60px;
  background: rgb(8, 6, 14);
  border: 1px solid $primary-color;
  border-top: none;
  width: 200px;
  transform: translateY(-150px);
  z-index: 9;
  transition: all 0.1s ease-in-out;

  &.visible {
    transform: translateY(20px);
  }

  a {
    @apply px-8 py-4;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: lighten(rgb(8, 6, 14), 4%);
      color: #fff;
    }
  }
}

.logged-in {
  img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

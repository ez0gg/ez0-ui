<template>
  <div class="home">
    <div class="hero-home">
      <div class="container flex flex-col items-center justify-center h-full">
        <img src="@/assets/images/logo2.png" />
        <h1 class="mb-8 text-center max-w-4xl">
          Valorant Club Focused on Running Strats
        </h1>
        <div class="home-buttons mb-16">
          <router-link to="/about" class="btn btn-big btn-signin mr-4">
            Learn More
          </router-link>
        </div>
      </div>
    </div>
    <div class="big-section">
      <div class="container text-center">
        <h1>Valorant Framework for 5-man Stacks in Competitive</h1>
        <p class="text-xl mb-4">
          We are a group of players that are tired of playing with random people
          that don't have any teamwork, don't communicate, and don't care about
          team comp.
        </p>
        <p class="text-xl">
          So we've created a <strong class="text-white">framework</strong> for
          how we want to approach the game as well as how we approach each
          round.
        </p>
      </div>
    </div>
    <div class="big-section bg-blue">
      <div class="container text-center">
        <h1>Pet Peeves in Solo Queue</h1>
        <p class="text-left mb-4 text-xl">
          This framework seeks to minimize common annoyances and pet peeves in
          Valorant such as:
        </p>
        <ul class="text-left text-sm">
          <li>Uncoordinated buy rounds (3 people save, 2 people buy)</li>
          <li>
            Competing calls for strats (lack of leader, 2 people trying to both
            call strats)
          </li>
          <li>AFKs (obviously)</li>
          <li>
            All 5 teammates rushing the same way on offense (making it really
            obvious for the other team to rotate and flank)
          </li>
          <li>
            Unclear communications (someone calls "THEYRE ALL COMING A" when its
            only 3 people)
          </li>
          <li>
            Over communication (talking about non-game stuff, back-seating, etc)
          </li>
          <li>
            Rotating too late or too early (leaving a site wide open before the
            other team has committed)
          </li>
          <li>Team doesn't retake together (goes in 1 by 1...)</li>
          <li>
            Pushing too much on defense, playing too passively on offense,
            peeking when you don't need to
          </li>
          <li>Uncoordinated utility usage</li>
          <li>4+ duelist comps lol derp</li>
          <li>
            No strategic depth - "Are we going A or B???" - you don't always
            need to decide at round start, let the round play out a bit first,
            and don't neglect the middle! etc
          </li>
        </ul>
      </div>
    </div>
    <div class="big-section join-discord">
      <img class="cypher" src="@/assets/images/cypher.png" />
      <div class="container text-center">
        <h1>Join our Discord</h1>
        <p class="mb-8">
          Come be a part of our community to stay updated on events and feature
          launches, get involved in tournament production, make new friends, and
          more!
        </p>
        <button class="btn btn-big">Join Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style lang="scss">
.hero-home {
  background: url('../assets/images/homebg.jpg') no-repeat center center;
  background-size: cover;
  height: 560px;

  h1 {
    font-size: 72px;
  }

  img {
    height: 96px;
    width: auto;
  }
}

.bg-blue {
  background: #03070c;
}

.join-discord {
  position: relative;
  overflow: hidden;

  .cypher {
    width: 700px;
    height: auto;
    position: absolute;
    left: 0;
    bottom: -280px;
  }
}
</style>

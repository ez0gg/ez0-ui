<template>
  <div class="home">
    <div class="hero-home">
      <div class="container flex flex-col items-center justify-center h-full">
        <img src="@/assets/logo2.png" />
        <h1 class="mb-8 text-center max-w-4xl">
          Valorant Framework for Ranked 5 Stacks
        </h1>
        <div class="home-buttons mb-16">
          <router-link to="/about" class="btn btn-big btn-signin mr-4">
            Learn More
          </router-link>
        </div>
      </div>
    </div>
    <div class="big-section">
      <div class="container text-left">
        <h1 class="text-center">Our Philosophy</h1>
        <p class="text-base mb-4">
          There are two primary categories to consider, which is broken down
          simply into "macro" and "micro".
        </p>

        <p class="text-base mb-4">
          1) Micro refers to your mechanics, which is largely focused on aim and
          movement, and is focused on the individual.
        </p>

        <p class="text-base mb-4">
          2) Macro is about positioning and strategy, and is more focused on the
          team as a whole rather than the individual.
        </p>

        <p class="text-base mb-4">
          Macro is just as important as micro, and I think macro is the area
          where many players are lacking or don't have a coherent vision, or
          philosophy, for how to approach. Micro, being focused on the
          individual, can be worked on with aim training, deathmatch, and just
          playing the game more in general, but macro is something that requires
          more thought and coordination across multiple people. Solo queue
          especially does not promote a lot of growth of macro understanding of
          the game. And I think growing your macro understanding of the game can
          lead to huge improvements in your ranked play. A lot of what people
          refer to as "game sense" can be grouped into macro.
        </p>

        <p class="text-base mb-4">Let me give an example.</p>

        <p class="text-base mb-4">
          How many solo queue games have you been in where your teams offensive
          strategy is to simply ask "Are we going A or B?" at the start of the
          round, then proceed to all 5 go in 1 direction. Then you get stomped,
          and the next round, you all 5 go to the opposite site, all 5 the same
          way again, and get stomped again, rinse and repeat for the rest of the
          match. Even if you win some of these rounds, even if 1 person changes
          it up slightly, the pattern is more or less the same. Sadly, I have
          seen this pattern in games at all levels of ranked play. This is what
          I call a 'lack of strategic variation' and something that I run into
          all too commonly.
        </p>

        <h1 class="text-center mt-8">The Framework</h1>
        <p class="text-base mb-4">
          To address some of these issues, we've come up with a framework to
          approach the game with, to help bring more strategic variation to
          games. The high-level goal of this framework is to be simple and easy
          to understand, and the strategies themselves should be relatively
          "short" and easy to call out at the beginning of rounds. Additionally,
          the strategies should NOT be prescriptive. What I mean by this is, a
          strategy should not be concerned with specific agents and specific
          utility placement -- instead, it should be higher level. I will give
          some examples on these in a moment. But first let me explain an idea
          that will give us an easier way to talk about these strategies, and
          that is how we consider the individual roles on a team.
        </p>

        <p class="text-base mb-4">
          <strong
            >We will divide the team into 3 groups, consisting of: 2 Tigers, 2
            Eagles and 1 Wolf.</strong
          >
          This gives us a quick and easy way to refer to everyone on the team,
          and to have a general idea of the responsibilities of you and your
          teammates, so you always have a decent idea of what everyone is doing
          on a macro level. Splitting the team up this way allows many different
          strategies and variations. The two groups of 2 will often stay
          together, although of course not mandatorily. Then the wolf has
          discretion to group with either the tigers or the eagles and create a
          3/2 grouping, or he can stay solo and create a 2/2/1 grouping, or he
          can have the tigers and eagles group while he solos, creating a 4/1
          grouping, etc. etc. This is just a high level overview and something I
          have more thoughts on and want to dig deeper on with like minded
          individuals.
        </p>

        <p class="text-base mb-4">
          Another advantage of this framework is the way you can rotate
          different players in and out of the different roles. If everyone
          understands the framework and philosophy, it's much easier to
          introduce new players into the team, as well as rotating players in
          and out from a larger pool of players. My goal is to have a group of
          around 10-20 people that all work on this framework together, and play
          5 stacks in ranked together to practice and develop it.
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

<style lang="scss"></style>

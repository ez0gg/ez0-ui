<template>
  <div class="info">
    <div class="container mt-8">
      <div class="grid grid-cols-6">
        <div class="left-nav">
          <p :class="{ active: page === 'faq' }" @click="setPage('faq')">FAQ</p>
          <p :class="{ active: page === 'rules' }" @click="setPage('rules')">
            Rules
          </p>
          <p :class="{ active: page === 'about' }" @click="setPage('about')">
            About
          </p>
        </div>
        <div class="info-content col-span-5">
          <div class="faq" v-if="page === 'faq'">
            <h1>Frequently Asked Questions</h1>
            <div class="question">
              <p class="question">Which servers do you use?</p>
              <p class="answer">
                In our early stages we are using Texas and Chicago servers. You
                must have an average ping of less than 70 to one of these
                servers in order to play. Whichever server of the two that has
                the best average ping for all players will be the one chosen.
              </p>
              <p class="answer mt-2">
                As we grow, we plan to add more regions. Stay tuned!
              </p>
            </div>
            <div class="question">
              <p class="question">Who can play in the tournaments?</p>
              <p class="answer">
                Anyone with a valid phone number that meets the ping
                requirements to the central servers.
              </p>
            </div>
            <div class="question">
              <p class="question">What rank are the players?</p>
              <p class="answer">
                We hope to be a community for players of all ranks to compete in
                tournaments. We are still new though, so our early efforts are
                generally focused on silver through platinum players.
              </p>
              <p class="answer mt-2">
                In the future we plan to add skill-based divisons to accommodate
                more players.
              </p>
            </div>
            <div class="question">
              <p class="question">
                Why do I need to sign up with my phone number?
              </p>
              <p class="answer">
                SMS login is a form of password-less login that is more secure,
                and makes it more difficult to create fake accounts and
                "smurfs". In addition, it's easier to combat bad actors /
                troublemakers.
                <strong
                  >We will never sell your phone number to any 3rd party or use
                  it for marketing - it is only used to log in.</strong
                >
              </p>
              <p class="answer mt-2">
                Our authentication is done through a 3rd party provider,
                <a href="https://auth0.com" target="_blank">auth0</a>, who is an
                industry leader in access and indentity management.
              </p>
            </div>
            <div class="question">
              <p class="question">How are the prizes paid out?</p>
              <p class="answer">
                You can choose between an amazon gift card or direct cash
                through cashapp.
              </p>
            </div>
          </div>
          <div class="rules" v-if="page === 'rules'">
            <h1>Rules</h1>
            <p class="rounded bg-gray-700 p-2">
              Notice: Ez0 is still in early development and these rules will
              evolve over time.
            </p>
            <p class="font-bold text-2xl mt-4 mb-4">
              The most important rule: be respectful and use common sense.
            </p>
            <h2>I. Professional Conduct</h2>
            <p>
              All players are expected to behave in a professional and
              respectful manner when competing in tournaments and utilizing the
              ez0 website and discord server.
            </p>
            <p>
              Any players displaying rude or obnoxious behavior may be suspended
              or banned at ez0's discretion.
            </p>
            <h2>II. Player Qualifications</h2>
            <p>
              Players must have a register account with a valid phone number to
              compete and earn prizes.
            </p>
            <p>
              Players must have an average ping of 70 or less to Chicago or
              Texas servers in order to play.
            </p>
            <h2>III. Matches</h2>
            <p>
              Players must arrive on time to their matches. If you are more than
              5 minutes late, your team may be disqualified.
            </p>
            <h2>IV. Disputes</h2>
            <p>Ez0 staff has the final say in all decisions.</p>
          </div>
          <div class="about" v-if="page === 'about'">
            <h1>About Ez0</h1>
            <p>
              We launched Element Zer0 because we love tournaments and want to
              give more players access to more tournaments.
            </p>
            <p class="mt-2">
              We want more players to be able to participate in tournaments and
              get the full tournament experience, including twitch streams,
              casters, news articles, etc.
            </p>
            <h1 class="mt-8">Help us grow</h1>
            <p>
              We are looking for people that want to be involved in the
              tournament scene and help grow ez0 into a leader in the VALORANT
              tournament scene.
            </p>
            <p class="mt-2">Skills we are looking for include:</p>
            <ul class="list-disc ml-8 mt-2">
              <li>Shoutcasters</li>
              <li>Admins &amp; Moderators</li>
              <li>Artists</li>
              <li>Broadcast Production</li>
              <li>Promoters / Business Development</li>
            </ul>
            <p class="mt-2">
              If you want to be involved in any way, please join our discord and
              get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 'rules',
    };
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
  },
};
</script>

<style lang="scss">
.info {
  .left-nav {
    p {
      @apply px-4 py-2 text-xl;
      border-left: 1px solid transparent;
      cursor: pointer;

      &.active {
        color: $primary-color;
        border-left: 1px solid $primary-color;
      }
    }
  }

  .info-content {
    @apply px-8;
    border-left: 1px solid #333;
    min-height: 60vh;

    h1 {
      font-size: 48px;
    }
  }

  .about p,
  .about ul {
    @apply text-lg;
  }

  .rules h2 {
    @apply text-3xl mt-4;
  }
}

div.question {
  @apply mb-8;
  p.question {
    @apply text-white text-2xl mb-1;
  }
  p.answer {
    @apply text-gray-400 text-lg;
  }
}
</style>

<template>
  <div class="edit-profile">
    <h1 class="text-3xl text-center mt-8 mb-8">Edit Profile</h1>
    <div class="container">
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-x-4 gap-y-4
          mb-4
        "
      >
        <div class="form-field">
          <label>Location</label>
          <input type="text" placeholder="Ohio" v-model="profile.location" />
        </div>
        <div class="form-field">
          <label>Age</label>
          <input type="text" v-model="profile.age" />
        </div>
        <div class="form-field">
          <label>Rank</label>
          <input type="text" placeholder="Gold 3" v-model="profile.rank" />
        </div>
        <div class="form-field">
          <label>Valorant Username</label>
          <input
            type="text"
            placeholder="username#0000"
            v-model="profile.valorantUsername"
          />
        </div>
        <div class="form-field">
          <label>Discord Username</label>
          <input
            type="text"
            placeholder="username#0000"
            v-model="profile.discordUsername"
          />
        </div>
        <div class="form-field">
          <label>Twitter Link</label>
          <input
            type="text"
            placeholder="https://twitter.com/username"
            v-model="profile.twitterLink"
          />
        </div>
        <div class="form-field">
          <label>Twitch Link</label>
          <input
            type="text"
            placeholder="https://twitch.tv/username"
            v-model="profile.twitchLink"
          />
        </div>
        <div class="form-field md:col-span-2">
          <label>Bio</label>
          <input
            type="text"
            placeholder="Tell us a little about yourself"
            v-model="profile.bio"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 mb-8">
        <div class="form-field profile-image">
          <label>Profile Image</label>
          <p class="label-description mb-5">
            Upload a custom image or choose a default agent image
          </p>
          <img :src="avatar" class="avatar mt-2 mb-4 mx-auto" />
          <button class="btn mb-2" @click="uploadProfile()">
            Upload Image
          </button>
          <div class="or text-center text-gray-600 mb-2">- or -</div>
          <div class="agents grid grid-cols-4 gap-4">
            <img
              v-for="agent in Object.keys(defaultAvatars)"
              :key="agent"
              class="mx-auto"
              :src="defaultAvatars[agent]"
              @click="setAvatar(agent)"
            />
          </div>
        </div>
        <div class="form-field banner-image md:col-span-2">
          <label>Banner Image</label>
          <p class="label-description mb-4">
            Banner image should be at least 1200px wide for best results
          </p>
          <img :src="banner" />
          <button class="btn mt-4 mb-2" @click="uploadBanner()">
            Upload Banner Image
          </button>
          <div class="or text-center text-gray-600 mb-2">- or -</div>
          <div class="banners grid grid-cols-3 gap-4">
            <img
              v-for="banner in Object.keys(defaultBanners)"
              :key="banner"
              class="mx-auto"
              :src="defaultBanners[banner]"
              @click="setBanner(banner)"
            />
          </div>
        </div>
      </div>
      <div class="text-right mt-4">
        <button class="btn btn-primary" @click="saveChanges()">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        location: '',
        age: '',
        rank: '',
        valorantUsername: '',
        discordUsername: '',
        twitterLink: '',
        twitchLink: '',
        bio: '',
        profileImageUrl: 'agent_yoru',
        bannerImageUrl: '',
      },
      defaultAvatars: {
        astra:
          'https://ucarecdn.com/ac90f93c-0b10-4a28-b261-60c9f69ac396/-/crop/148x148/21,0/-/resize/120x120/',
        breach:
          'https://ucarecdn.com/632b6ee3-22b7-4b0e-9bb9-6ef4169b9e7c/-/crop/137x137/5,0/-/resize/120x120/',
        brimstone:
          'https://ucarecdn.com/bb700edf-7c6c-454b-acda-4060bb463175/-/crop/131x131/0,8/-/resize/120x120/',
        cypher:
          'https://ucarecdn.com/0678b743-da41-4ffc-b1be-51db5d501394/-/crop/163x163/48,0/-/resize/120x120/',
        jett: 'https://ucarecdn.com/1265a31c-c087-4a55-97dd-3c7891270271/-/crop/191x191/7,0/-/resize/120x120/',
        kayo: 'https://ucarecdn.com/db63aa52-dbf5-4844-92ef-3c9ccba0b076/-/crop/135x135/1,0/-/resize/120x120/',
        killjoy:
          'https://ucarecdn.com/4ec941d1-bc0c-4c38-b309-5d82372d5bea/-/crop/150x150/8,0/-/resize/120x120/',
        omen: 'https://ucarecdn.com/66ca3632-2232-4d34-a15f-e4a06d84d38a/-/crop/146x146/0,4/-/resize/120x120/',
        phoenix:
          'https://ucarecdn.com/6d8771ae-cad4-4019-84f8-2b228433ce77/-/crop/139x139/2,0/-/resize/120x120/',
        raze: 'https://ucarecdn.com/a84c9c82-dd59-47be-8f32-4a6aa2d1870d/-/crop/145x144/27,20/-/resize/120x120/',
        reyna:
          'https://ucarecdn.com/d239864a-a50b-4f27-8cb4-40aab9b24e71/-/crop/131x131/0,3/-/resize/120x120/',
        sage: 'https://ucarecdn.com/ad578a4c-3bf1-44ae-864f-39302b8efdcb/-/crop/173x173/16,7/-/resize/120x120/',
        skye: 'https://ucarecdn.com/1cdb678e-0832-48c0-95bb-add193566732/-/crop/174x174/7,8/-/resize/120x120/',
        sova: 'https://ucarecdn.com/60fbff0f-006c-4624-93a8-aa28e34397f3/-/crop/152x152/15,0/-/resize/120x120/',
        viper:
          'https://ucarecdn.com/d681f37a-5ed3-4758-9fca-91b9df574afa/-/crop/142x142/29,0/-/resize/120x120/',
        yoru: 'https://ucarecdn.com/2ba09436-24bc-404f-845e-4797fcb27da2/-/crop/164x164/0,3/-/resize/120x120/',
      },
      defaultBanners: {
        ascent:
          'https://ucarecdn.com/372c9ee4-f5b0-4085-bf8f-89963c099ea8/-/crop/1572x523/128,450/-/resize/1200x400/',
        bind: 'https://ucarecdn.com/e72c1aa2-ab2d-4652-b686-ad779e362c26/-/crop/1319x440/0,82/-/resize/1200x400/',
        breeze:
          'https://ucarecdn.com/7fef9d4e-0d0e-4c45-a4d1-b45f8063c77e/-/crop/1920x639/0,276/-/resize/1200x400/',
        haven:
          'https://ucarecdn.com/77eb5caa-fa3a-4aab-b017-641b468fdf6c/-/crop/1920x639/0,220/-/resize/1200x400/',
        icebox:
          'https://ucarecdn.com/23d6cb50-d7b1-4564-93a3-9ddeee2e7c65/-/crop/2560x852/0,442/-/resize/1200x400/',
        split:
          'https://ucarecdn.com/9cd15905-03ad-4e1f-8898-55b0a8cb1206/-/crop/1920x639/0,331/-/resize/1200x400/',
      },
    };
  },
  computed: {
    avatar() {
      const test = this.profile.profileImageUrl.substring(
        6,
        this.profile.profileImageUrl.length + 1
      );

      return this.profile.profileImageUrl.substring(0, 6) === 'agent_'
        ? this.defaultAvatars[test]
        : this.profile.profileImageUrl;
    },
    banner() {
      const test = this.profile.bannerImageUrl.substring(
        4,
        this.profile.bannerImageUrl.length + 1
      );
      return this.profile.bannerImageUrl.substring(0, 4) === 'map_'
        ? this.defaultBanners[test]
        : this.profile.bannerImageUrl;
    },
  },
  methods: {
    setAvatar(agent) {
      this.profile.profileImageUrl = `agent_${agent}`;
    },
    setBanner(banner) {
      this.profile.bannerImageUrl = `map_${banner}`;
    },
    async saveChanges() {
      const apiUrl = this.$store.state.apiUrl;
      const token = this.$store.state.token;
      try {
        await this.$http.post(
          `${apiUrl}/users/profile/update`,
          {
            ...this.profile,
            profileImageUrl: this.avatar,
            bannerImageUrl: this.banner,
          },
          { headers: { Authorization: 'Bearer ' + token } }
        );
        this.$toasted.success('Your profile was updated.');
        this.$store.dispatch('refreshUserdata');
        this.$router.push('/user/' + this.$store.state.user.username);
      } catch (e) {
        console.error('error updating user', e);
        this.$toasted.error('Error: ' + e.response.data.message);
      }
    },
  },
  created() {
    console.log(this.$store.state.user);
    this.profile.location = this.$store.state.user.location || '';
    this.profile.age = this.$store.state.user.age || 0;
    this.profile.rank = this.$store.state.user.rank || '';
    this.profile.valorantUsername =
      this.$store.state.user.valorantUsername || '';
    this.profile.discordUsername = this.$store.state.user.discordUsername || '';
    this.profile.twitterLink = this.$store.state.user.twitterLink || '';
    this.profile.twitchLink = this.$store.state.user.twitchLink || '';
    this.profile.bio = this.$store.state.user.bio || '';
    this.profile.profileImageUrl = this.$store.state.user.profileImageUrl || '';
    this.profile.bannerImageUrl = this.$store.state.user.bannerImageUrl || '';
  },
};
</script>

<style lang="scss">
.form-field {
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 18px;
  }
}
.agents img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2px solid $primary-color;
    transform: scale(1.2);
  }
}
.profile-image img.avatar {
  // border: 1px solid #7a7a7a;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.banner-image img {
  border: 1px solid #7a7a7a;
  width: 100%;
  height: auto;
}
.label-description {
  color: #bdbdbd;
}
</style>

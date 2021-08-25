<template>
  <div class="tournaments">
    <div class="event-section">
      <div class="container text-center">
        <h1 class="text-4xl">Next Tournament</h1>
        <EventCard class="mx-auto" />
      </div>
    </div>
    <div class="event-section bg-black">
      <h1 class="text-4xl mb-12 text-center">Other Upcoming Events</h1>
      <p class="text-gray-400 text-center text-lg">
        No future events scheduled at this time &mdash; check back soon
      </p>
    </div>
    <div class="event-section">
      <h1 class="text-4xl mb-12 text-center">Past Events</h1>
      <div class="events flex items-center justify-center">
        <p class="text-gray-400 text-center text-lg">
          No tournaments have been completed yet &mdash; check back soon
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
export default {
  data() {
    return {
      currentEvents: [],
      upcomingEvents: [],
      recentEvents: [],
    };
  },
  components: { EventCard },
};
</script>

<style lang="scss"></style>

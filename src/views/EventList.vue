<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue"
import EventService from "../services/EventService"

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    let getEventsData = async () => {
      try {
        let response = await EventService.getEvents()
        this.events =  response.data
      } catch (e) {
        console.log(e)
      }
    }
    getEventsData()
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

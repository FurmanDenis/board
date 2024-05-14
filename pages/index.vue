<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Events</h1>
    <div v-if="events && events.length > 0">
      <div class="w-full pb-10">
        <input
          type="text"
          v-model="search"
          placeholder="Search events..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div class="w-full pb-10" v-if="paginatedEvents && paginatedEvents.length > 0">
        <label for="sort-by" class="mr-2">Sort By:</label>
        <select v-model="sortBy" id="sort-by" class="px-3 py-2 border border-gray-300 rounded-md shadow-sm">
          <option value="title">Title</option>
          <option value="date_start">Date latest</option>
        </select>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <EventCard
          v-for="event in paginatedEvents"
          :key="event.id"
          :event="event"
        />
      </div>
    </div>
    <div v-else>
      <p>No events found</p>
    </div>
    <div class="mt-6 flex justify-center items-center space-x-2" v-if="paginatedEvents && paginatedEvents.length > 0">
      <button
        @click="prevPage"
        :disabled="currentPage <= 1"
        class="bg-gray-300 px-4 py-2 rounded"
      >
        Prev
      </button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage >= totalPages"
        class="bg-gray-300 px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import EventCard from "~/components/EventCard.vue";
const { data: events } = await useAsyncData(() => $fetch('/api/events'), []);
const itemsPerPage = 6;
const currentPage = ref(1);
const search = ref('');
const sortBy = ref('title');

const filteredEvents = computed(() => {
  if (!search.value) {
    return events.value;
  }
  return events.value.filter(event =>
    event.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

const sortedEvents = computed(() => {
  return filteredEvents.value.sort((a, b) => {
    if (sortBy.value === 'title') {
      return a.title.localeCompare(b.title); 
    } else if (sortBy.value === 'date_start') {
      return new Date(b.date_start) - new Date(a.date_start);
    }
    return 0;
  });
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedEvents.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(sortedEvents.value.length / itemsPerPage)
);

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function resetPagination() {
  currentPage.value = 0;
  currentPage.value = 1;
}

watch([sortBy, search], () => {
  resetPagination()
});


</script>

<template>
  <div class="border p-4 rounded-lg shadow-md bg-white space-y-2">
    <h3 class="font-bold">{{ event.title }}</h3>
    <p>{{ event.description }}</p>
    <p>{{ event.date_start }}</p>
    <div class="flex space-x-4">
      <NuxtLink
      :to="`/event/${event.id}/form`"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >Register</NuxtLink
      >
      <NuxtLink
        :to="`/event/${event.id}/participants`"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >View</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

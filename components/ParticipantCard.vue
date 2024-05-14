<template>
  <div
    class="border p-4 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors"
  >
    <h3 class="font-bold text-lg">{{ participant.name }}</h3>
    <p class="text-gray-600">{{ participant.email }}</p>
  </div>
</template>

<script setup>
defineProps({
  participant: {
    type: Object,
    required: true,
    default: () => ({
      name: "",
      email: "",
    }),
  },
});
</script>

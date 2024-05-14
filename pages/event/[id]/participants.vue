<template>
  <div class="p-8">
    <p>Users</p>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by name or email"
      class="mt-4 mb-4 px-3 py-2 border border-gray-300 rounded-md w-full"
    />
    <div v-if="isParticipantsEmpty" class="p-8">Users not found</div>
    <div class="p-6" v-else>
      <div class="grid grid-cols-3 gap-4">
        <ParticipantCard
          v-for="participant in filteredParticipants"
          :key="participant.id"
          :participant="participant"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ParticipantCard from "~/components/ParticipantCard.vue";

const { params } = useRoute();
const id = params.id;

const { data: participants } = await useAsyncData(() => $fetch(`/api/users/${id}`));
const searchQuery = ref("");

const filteredParticipants = computed(() => {
  if (!searchQuery.value) {
    return participants.value;
  }
  return participants.value.filter(participant => {
    const searchTerm = searchQuery.value.toLowerCase();
    return (
      participant.name.toLowerCase().includes(searchTerm) ||
      participant.email.toLowerCase().includes(searchTerm)
    );
  });
});

const isParticipantsEmpty = computed(() => !filteredParticipants.value || filteredParticipants.value.length === 0);
</script>

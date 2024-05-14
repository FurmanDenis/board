<template>
  <div class="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg bg-white">
    <h1 class="text-xl font-semibold mb-6">Event Registration</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <span v-if="errors.name" class="text-red-600 text-sm">{{ errors.name }}</span>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <span v-if="errors.email" class="text-red-600 text-sm">{{ errors.email }}</span>
      </div>
      <div class="mb-4">
        <label for="dob" class="block text-sm font-medium text-gray-700">Date of birth</label>
        <input
          type="date"
          id="dob"
          v-model="formData.dob"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <span v-if="errors.dob" class="text-red-600 text-sm">{{ errors.dob }}</span>
      </div>
      <fieldset class="mb-6">
        <legend class="text-sm font-medium text-gray-700">Where did you hear about this event?</legend>
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input type="radio" name="source" value="Social media" v-model="formData.source" class="form-radio" />
              <span class="ml-2">Social media</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" name="source" value="Friends" v-model="formData.source" class="form-radio" />
              <span class="ml-2">Friends</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" name="source" value="Found myself" v-model="formData.source" class="form-radio" />
              <span class="ml-2">Found myself</span>
            </label>
          </div>
        </div>
        <span v-if="errors.source" class="text-red-600 text-sm">{{ errors.source }}</span>
      </fieldset>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
    </form>
  </div>
</template>

<script setup>

const { params } = useRoute();
const eventId = params.id;

const formData = ref({
  name: "",
  email: "",
  dob: "",
  source: "",
});

const errors = ref({
  name: null,
  email: null,
  dob: null,
  source: null,
});

const validateForm = () => {
  errors.value.name = !formData.value.name ? "Full name is required" : null;
  errors.value.email = !formData.value.email ? "Email is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email) ? "Invalid email format" : null;
  errors.value.dob = !formData.value.dob ? "Date of birth is required" : null;
  errors.value.source = !formData.value.source ? "Please select a source" : null;

  return !errors.value.name && !errors.value.email && !errors.value.dob && !errors.value.source;
};

const addUser = async () => {
  const response = await fetch("/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dataForm: formData.value,
      eventId: eventId,
    }),
  });

  if (response.ok) {
    navigateTo("/");
  } else {
    console.error("Failed to register user");
  }
};

const submitForm = () => {
  if (validateForm()) {
    addUser();
  }
};
</script>

<style scoped>
.text-red-600 {
  color: #e3342f;
}
</style>

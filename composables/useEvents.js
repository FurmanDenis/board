import { ref } from "vue";

export async function useEvents() {
  const events = ref([]);
  const {pedding, data} = useAsyncData(async () => { $fetch('/api/events') });
  if(data){
    events.value = data;
  }

  return events;
}

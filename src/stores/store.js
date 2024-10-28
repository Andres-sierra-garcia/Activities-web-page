import { defineStore } from "pinia";
import { ref } from "vue";
import swal from "sweetalert2"
export const useMainStore = defineStore(
    "main",
    () => {
        let activities = ref([]);
        const selectedActivity = ref({
            description: "",    
            date: "",
            state: "",
        });

        function addActivity(description, date) {
            if (description == null) {
                swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "la descripcion es obligatoria",
                })
            } else if (date == null) {
                swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "la fecha es obligatoria",
                })
            } else {
                activities.value.push({
                    description: description,
                    date: date,
                    state: "pendiente",
                });
            }
        }

        function deleteActivity(row) {
            const index = activities.value.indexOf(row);
            activities.value.splice(index, 1);
        }

        function selectActivity(activity) {
            selectedActivity.value = activity;
        }

        function editActivity(description, date) {
            const index = activities.value.indexOf(selectedActivity.value);
            activities.value[index].description = description;
            activities.value[index].date = date;
        }

        function changeState(activity) {
            const index = activities.value.indexOf(activity);
            activities.value[index].state = "completada";
        }

        return {
            activities,
            addActivity,
            deleteActivity,
            selectActivity,
            selectedActivity,
            editActivity,
            changeState,
        };
    },
    {
        persist: true,
    }
);

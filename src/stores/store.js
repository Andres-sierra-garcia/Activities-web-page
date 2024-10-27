import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
    let activities = ref([]);
    const selectedActivity = ref({
        description: "",
        date: "",
        state: ""
    })

    function addActivity(description, date) {
        activities.value.push({
            description:description,
            date:date,
            state:"pendiente"
        });
    }

    function deleteActivity(row){
        const index = activities.value.indexOf(row)
        activities.value.splice(index, 1)
    }

    function selectActivity(activity){
        selectedActivity.value = activity
    }

    function editActivity( description, date){
        const index = activities.value.indexOf(selectedActivity.value)
        activities.value[index].description = description
        activities.value[index].date = date 
    }

    function changeState(activity){
        const index = activities.value.indexOf(activity)
        activities.value[index].state = "completada"
    }

    return { activities, addActivity , deleteActivity, selectActivity, selectedActivity, editActivity, changeState};
});

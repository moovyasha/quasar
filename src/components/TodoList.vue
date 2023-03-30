<template>
  <div>
    <div>{{ getTasks }}</div>
    <h2>Todo</h2>

    <!-- <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select> -->
    <VisibleForm
      :show="show"
      :editedItem="editedItem"
      @onCancel="onCancel"
      @toggleVisibleForm="toggleVisibleForm"
      @onSubmit="onSubmit"
      @onEditItem="onEditItem"
    />
    <div>
      <q-btn round :title="tipAdd" @click="editItem()">
        <img src="~assets/images/AddTask.png" /><q-tooltip
          anchor="top middle"
          self="bottom middle"
          transition-show="rotate"
          transition-hide="rotate"
        >
          ADD TASK
        </q-tooltip>
      </q-btn>
    </div>

    <!-- <Loader v-if="loading" /> -->

    <ul v-if="allTasks && allTasks.length">
      <TodoItem
        v-for="(task, i) of allTasks"
        :task="task"
        @removeTask="removeTask"
        @completeTask="completed"
        :indexTask="i"
        @editItem="editItem"
      />
    </ul>
  </div>
</template>

<script>
import VisibleForm from "./VisibleForm.vue";
import TodoItem from "./TodoItem.vue";
import Loader from "./Loader.vue";
import getTasks from "/vue.js/quasar-project/src/api/tasksFromSite";
import { ref } from "vue";

export default {
  data() {
    return {
      // taskList: [],
      loading: true, //для отображения Loader'a
      filter: "all",
      show: false,
      editedItem: undefined,
      tipAdd: "Add Task",
      defaultTask: {
        id: "",
        title: "",
        completed: "",
      },
      getTasks: null,
    };
  },
  setup() {
    return {
      prompt: ref(false),

      address: ref(""),
    };
  },

  components: {
    TodoItem,
    Loader,
    VisibleForm,
  },
  methods: {
    removeTask(index) {
      this.$store.commit("tasks/removeTask", index);
    },
    completed(index) {
      this.$store.commit("tasks/statusTask", index);
    },
    onEditItem({ key, value }) {
      this.editedItem[key] = value;
    },
    onCancel() {
      this.editedItem = undefined;
      this.show = false;
    },
    editItem(task) {
      if (task && task.id) {
        this.editedItem = { ...task };
      } else {
        this.editedItem = { ...this.defaultTask };
      }
      this.show = true;
    },
    toggleVisibleForm(value) {
      this.show = value;
    },
    onSubmit() {
      // console.log('onSubmit', this.editedItem)

      //проверка на введенный текст в полеs
      if (this.editedItem.id === "") {
        if (this.editedItem.title.trim()) {
          const newTask = {
            id: Date.now(),
            title: this.editedItem.title,
            completed: false,
          };
          this.$store.commit("tasks/addTask", newTask);
        } /* создали новый элемент */
      } else {
        if (this.editedItem.title.trim()) {
          this.$store.commit("tasks/editTask", this.editedItem);
        }
      }
      this.toggleVisibleForm(false);
    },
  },
  async mounted() {
    this.$store.dispatch("tasks/fetchTasks");
  },
  computed: {
    // filterTask() {
    //   if (this.filter === 'all') {
    //     return this.taskList
    //   }
    //   if (this.filter === 'completed') {
    //     return this.taskList.filter((t) => t.completed)
    //   }
    //   if (this.filter === 'not-completed') {
    //     return this.taskList.filter((t) => !t.completed)
    //   }
    // },

    allTasks() {
      return this.$store.state.tasks.taskList;
    },
  },
};
</script>

<style >



</style>

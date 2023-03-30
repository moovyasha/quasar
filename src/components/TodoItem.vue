<template>
  <li>
    <div v-bind:class="{ done: task.completed }" @click="$emit('completeTask', task.id)">
      <input type="checkbox" :checked="task.completed" />
      <span>{{ indexTask + 1 }}</span>
      <span class="first-upper">{{ task.title }}</span>
      <span>{{ task.completed }}</span>
    </div>

    <div>
      <button :title="tipEdit" @click="$emit('editItem', task)"><IconEdit /></button>
      <button :title="tipDelete" @click="$emit('removeTask', task.id)"><IconDelete /></button>
    </div>
  </li>
</template>

<script>
import IconDelete from './IconDelete.vue'
import IconEdit from './IconEdit.vue'
export default {
  data() {
    return {
      tipEdit: 'Edit Task',
      tipDelete: 'Delete Task'
    }
  },

  props: {
    task: {},

    show: Boolean,
    indexTask: Number
  },
  components: {
    IconDelete,
    IconEdit
  }
}
</script>

<style scoped>
li {
  border: 4px solid rgb(121, 55, 121);
  /* display: block; */
  justify-content: space-between;
  padding: 12px 43px;
  margin-bottom: 5px;
  width: auto;
}
.done {
  text-decoration: line-through;
}
.remove {
  background-color: brown;
}
button.pop-up::before {
  content: attr(data-title);
  display: none;
}
button.pop-up:focus::before {
  display: block;
}
span::first-upper {
  text-transform: uppercase;
  display: inline-block;
}
</style>

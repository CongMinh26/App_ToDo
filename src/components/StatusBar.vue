<template>
  <div class="status-bar" v-if="isAuthenticated">
      <h3>Done</h3>
      <ul style="list-style: none;">
          <li v-for="item in doneTodo" :key="item.id">
              {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
    computed: mapGetters(['doneTodo','isAuthenticated'])
        // doneTodo(){            
        //     return this.$store.getters.doneTodo
        //     // this.$store.state.todos.filter(todo => todo.computed)
        // }
}
</script>

<style>
.status-bar {
	padding: 5px;
	text-align: center;
	background: rgb(240, 240, 240);
	color: black;
}
</style>
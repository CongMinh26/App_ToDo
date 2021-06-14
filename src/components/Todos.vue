<template>
  <div class="todo-list">
	  <TodoForm/>
      <ul v-if="isAuthenticated">
			<li
				v-for="todo in todos"
				:key="todo.id"
				:class="todo.completed ? 'completed' : ''">
				{{ todo.title }}
				<input
					type="checkbox"
					:checked="todo.completed"
					@change="MARK_COMPLETE(todo.id)"/>
				<button @click="deleteTodo(todo.id)">Delete</button>
			</li>
		</ul>
      <p v-else style="text-align: center; padding-bottom: 12px;">Not Anthenticated</p>
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import { mapMutations, mapActions, mapGetters} from 'vuex'// heplper giúp lấy dữ liệu từ store ngắn ngọn hơn

export default {
    name:'Todos',
	components:{
		TodoForm
	},
        // cách cũ 
        //todos(){
        //     // lấy dữ liệu từ store
        //     return this.$store.state.todos
    computed: mapGetters( ['todos','isAuthenticated']),
	
	created(){
		this.getTodos() // chạy đầu tiên lấy dữ liệu về
	},
	methods:{ ...mapMutations(['MARK_COMPLETE']),
			  ...mapActions(['deleteTodo','getTodos'])
			/* deleteTodo(todoId) {
				this.$store.dispatch('deleteTodo', todoId)
			} */
			}
}
</script>

<style>
.todo-list ul {
	padding: 0 10px 10px 10px;
	list-style-type: none;
}
.todo-list li {
	padding: 10px;
	cursor: pointer;
	margin: 10px 0;
	border-radius: 4px;
	background: rgb(240, 240, 240);
	color: black;
}
.todo-list li input[type='checkbox'] {
	-ms-transform: scale(2); /* IE */
	-moz-transform: scale(2); /* FF */
	-webkit-transform: scale(2); /* Safari and Chrome */
	-o-transform: scale(2); /* Opera */
	transform: scale(2);
	padding: 10px;
	float: right;
}
.todo-list li.completed {
	background: rgb(17, 218, 10);
}
.todo-list li.not_completed {
	background: rgb(42, 230, 230);
}
.todo-list li button {
	float: right;
	margin-right: 20px;
}
.todo-list li button:hover {
	cursor: pointer;
	background: red;
	color: white;
}
</style>
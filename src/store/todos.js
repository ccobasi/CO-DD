import {defineStore} from "pinia"

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
              {
                id: 1,
                text: "clean room",
                isFinished: false
            },
             {
                id: 2,
                text: "read",
                isFinished: true
            },
        ],
        filter: "all",
    }),
    getters: {
        filteredTodos(){
            if(this.filter === "finished"){
                return this.todos.filter((todo) => todo.isFinished)
            }
            else if(this.filter === "unfinished"){
                return this.todos.filter((todo) => !todo.isFinished)
            }
            return this.todos;
        }
    },
    actions: {
        addTodo(text){
            if(!text) return;
            this.todos.push({
                id: Math.floor(Math.random() * 10000000000),
                text,
                isFinished: false,
                
            })
            // Save to local storage after adding a todo
            this.persistTodos()
        },
        persist: true,
        toggleTodo(id){
            const index = this.todos.findIndex((todo) => todo.id === id)
            this.todos[index].isFinished = !this.todos[index].isFinished
        },
        persistTodos() {
      // Save todos and filter to local storage
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("filter", this.filter);
    },
    // Load todos from local storage when initializing the store
    init() {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }

      const storedFilter = localStorage.getItem("filter");
      if (storedFilter) {
        this.filter = storedFilter;
      }
    },
        updateFilter(value){
            this.filter = value
        }
    },
    // Call the init action when creating the store
  actions: {
    init: "init",
  },
})

// export const useCounterStore = defineStore('counter', {
//     state: ()=>({
//         count :  56789 ,
//         }),
//         actions: {
//             increment (){
//                 this.count++
//         },
//         persist: true
//         }
// })
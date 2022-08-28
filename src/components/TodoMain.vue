<script setup>
// import { computed } from "vue";
import useStore from '../store/index'

const { todoStore } = useStore()
// 订阅store中数据的变化
// 当数据发生变化,会触发 $subscribe
todoStore.$subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(todoStore.list))
})
const toggleAll = (e) => {
    todoStore.toggleTodo(e.target.checked)
}
</script>

<template>
    <section class="main">
        <!--     v-model="isCheckAll"-->
        <input
            id="toggle-all"
            class="toggle-all"
            type="checkbox"
            @change="toggleAll"
            :checked="todoStore.isAll"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li
                v-for="item in todoStore.newList"
                :key="item.id"
                :class="{ completed: item.done }"
            >
                <div class="view">
                    <input
                        @change="todoStore.changeState(item.id)"
                        class="toggle"
                        type="checkbox"
                        :checked="item.done"
                    />
                    <label>{{ item.name }}</label>
                    <button
                        @click="todoStore.delTodo(item.id)"
                        class="destroy"
                    ></button>
                </div>
                <input class="edit" value="Rule the web" />
            </li>
        </ul>
    </section>
</template>

<style lang="less" scoped></style>

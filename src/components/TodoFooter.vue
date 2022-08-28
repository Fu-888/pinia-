<script setup>
import useStore from '../store/index'

const { todoStore } = useStore()
</script>

<template>
    <footer class="footer">
        <span class="todo-count"
            ><strong>{{ todoStore.allCount }}</strong> item left</span
        >
        <ul class="filters">
            <li
                v-for="item in todoStore.typeList"
                :key="item"
                @click="todoStore.changeType(item)"
            >
                <a
                    :class="{ selected: todoStore.currentType == item }"
                    href="#/"
                    >{{ item }}
                </a>
            </li>
            <!--            <li>-->
            <!--                <a href="#/active">Active</a>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--                <a href="#/completed">Completed</a>-->
            <!--            </li>-->
        </ul>
        <button class="clear-completed" @click="todoStore.clear">
            Clear completed
        </button>
    </footer>
</template>

<style lang="less" scoped></style>

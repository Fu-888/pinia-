import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoList', {
    /**
     * @returns {{list: any, type: 'ALL'|'COMPLETE'|'ACTIVE'}}
     */
    state() {
        return {
            list: JSON.parse(localStorage.getItem('todos')) || [],
            typeList: ['All', 'Active', 'Completed'],
            currentType: 'All'
        }
    },
    actions: {
        // 改变状态
        changeState(id) {
            // console.log('改变状态')
            this.list.forEach((item) => {
                if (item.id === id) {
                    item.done = !item.done
                }
            })
        },
        //  删除
        delTodo(id) {
            this.list = this.list.filter((item) => item.id !== id)
        },
        //  添加
        addTodo(val) {
            this.list.unshift({
                id: Date.now(),
                name: val,
                done: false
            })
        },
        // 反选
        toggleTodo(val) {
            this.list.forEach((item) => (item.done = val))
        },
        // 清空已完成
        clear() {
            this.list = this.list.filter((item) => !item.done)
        },
        //
        changeType(type) {
            this.currentType = type
        }
    },
    getters: {
        isAll() {
            return this.list.every((item) => item.done)
        },
        // 未完成的数量
        allCount() {
            return this.list.filter((item) => !item.done).length
        },
        //
        newList() {
            return this.list.filter((item) => {
                if (this.currentType === 'Active') {
                    return !item.done
                } else if (this.currentType === 'Completed') {
                    return item.done
                } else {
                    return true
                }
            })
        }
    }
})

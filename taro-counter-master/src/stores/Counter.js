import { observable, action } from 'mobx'

// const CounterStore = observable({
//   count: 0
// })

// CounterStore.increase = action(function () {
//   this.count++
// })

// CounterStore.decrease = action(function () {
//   this.count--
// })

// CounterStore.increaseAsync = action(function () {
//   setTimeout(() => {
//     this.count++
//   }, 1000);
// })

// export default CounterStore

class CounterStore {
  @observable count = 0

  @action
  increase = () => {
    this.count++
  }

  @action
  decrease = () => {
    this.count--
  }

  @action
  increaseAsync = () => {
    setTimeout(() => {
      this.count++
    }, 1000);
  }
}

export default new CounterStore()

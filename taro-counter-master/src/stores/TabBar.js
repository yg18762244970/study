import { observable, action } from 'mobx'

class TabBarStore {
  @observable currentTab = 0

  @action
  navigateToTab = (i) => {
    this.currentTab = i;
  }
}

export default new TabBarStore()

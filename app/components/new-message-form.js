import Component from '@ember/component'
import { inject as service } from '@ember/service'
import mutation from 'gql-chat/gql/mutations/sendMessage'

export default Component.extend({
  apollo: service(),

  newMessageText: '',

  actions: {
    sendMessage(e) {
      e.preventDefault()
      let variables = { text: this.newMessageText }
      return this.apollo
        .mutate({ mutation, variables }, 'sendMessage')
        .then(() => {
          this.set('newMessageText', '')
        })
    },
  },
})

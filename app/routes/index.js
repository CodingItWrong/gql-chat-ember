import Route from '@ember/routing/route'
import { queryManager } from 'ember-apollo-client'
import query from 'gql-chat/gql/queries/loadMessages'

export default Route.extend({
  apollo: queryManager(),

  model() {
    return this.apollo.watchQuery({ query }, 'messages')
  },
})

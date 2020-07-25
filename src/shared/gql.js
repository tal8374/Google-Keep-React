import gql from 'graphql-tag';
const getTodosAndLabels = gql`
query getUser($userInput: UserInput!) {
  getUser(userInput: $userInput) {
    id
    email
    todos {
      id
      title
      notes {
        text
    		isCompleted
      }
      labels {
        id
    		name
      }
      color
      isCheckboxMode
    }
  }
}
`

export {
    getTodosAndLabels,
}
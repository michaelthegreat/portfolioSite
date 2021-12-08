import gql from "graphql-tag";

export const CONTACT_QUERIES = {
    SEND_CONTACT_REQUEST: gql`
    mutation contact($name: String!, $email: String!, $message: String!) {
        contact(name: $name, email: $email, message: $message)
      }
    `
}

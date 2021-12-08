import { InMemoryCache } from '@apollo/client/core';
import { Apollo, ApolloBase } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { setContext } from '@apollo/client/link/context';

@Injectable({ providedIn: 'root' })
export class GqlServerInteractionService {
  public client: ApolloBase;
  private clientEndpoint = 'gql';
  private authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // todo get a real token
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  private create(apollo: Apollo, httpLink: HttpLink, endpoint: string) {
    const uri = environment.endpoints.apiUrl + endpoint;
    apollo.create(
      {
        link: this.authLink.concat(httpLink.create({ uri })),
        cache: new InMemoryCache(),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'network-only',
            errorPolicy: 'ignore',
          },
          query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
          },
        },
      },
      endpoint
    );
  }

  constructor(apollo: Apollo, httpLink: HttpLink) {
    this.create(apollo, httpLink, this.clientEndpoint);

    this.client = apollo.use(this.clientEndpoint);
  }
}

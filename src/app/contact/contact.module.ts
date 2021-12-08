import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UiMaterialModule } from '../ui-material/ui-material.module';
import { SharedModule } from '../shared/shared.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { ContactEffects } from './+state/contact.effects';
import { EffectsModule } from '@ngrx/effects';
import { contactFeatureKey } from './+state/contact.feature-key';
import { wrappedContactReducer } from './+state/contact.reducer';
import { StoreModule } from '@ngrx/store';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    SharedModule,
    UiMaterialModule.forRoot({
      color: 'primary',
    }),
    RecaptchaModule,
    EffectsModule.forFeature([ContactEffects]),
    StoreModule.forFeature(contactFeatureKey, wrappedContactReducer),
    CoreModule
  ],
  exports: [ContactPageComponent],
  // providers: [
  //   {
  //     provide: APOLLO_OPTIONS,
  //     useFactory: (httpLink: HttpLink) => {

  //       const authLink = setContext((_, { headers }) => {
  //         // todo get a real bearer token system
  //         // get the authentication token from local storage if it exists
  //         // const token = localStorage.getItem('token');
  //         const token = 'eyJraWQiOiIxRFVzTFRUV1cxbEJRMXd2U1pLYThVTElSaEVuSnRkaEZRcDBWOXZiZmNzPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoibFF6TkJYZFh2b1cxSXB6bVd1RkYyZyIsInN1YiI6IjZmMzgyOWIzLWJkNWQtNDBmMy05Mzg2LWI0ZTVkYWM2NmYwNSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9MQ0hXVWxOaTZfamJsLWRldi1waXAtb2t0YSJdLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByb2ZpbGUiOiIyMjM3Mjc0IiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfTENIV1VsTmk2IiwiY29nbml0bzp1c2VybmFtZSI6ImpibC1kZXYtcGlwLW9rdGFfTWljaGFlbF9RdWludGVyb0BKYWJpbC5jb20iLCJhdWQiOiIzb3VyMGc0NzhhMmZobnA3aWpxZDZwNTk2biIsImlkZW50aXRpZXMiOlt7InVzZXJJZCI6Ik1pY2hhZWxfUXVpbnRlcm9ASmFiaWwuY29tIiwicHJvdmlkZXJOYW1lIjoiamJsLWRldi1waXAtb2t0YSIsInByb3ZpZGVyVHlwZSI6IlNBTUwiLCJpc3N1ZXIiOiJodHRwOlwvXC93d3cub2t0YS5jb21cL2V4a250dGE2b3FLSTZDRTJQMGg3IiwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE1NzEyMzg1MDYzNDEifV0sInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTkyNTA5NTgzLCJuYW1lIjoiTWljaGFlbCIsImV4cCI6MTU5Mjk0MTgzOSwiaWF0IjoxNTkyOTM4MjM5LCJmYW1pbHlfbmFtZSI6IlF1aW50ZXJvIiwiZW1haWwiOiJNaWNoYWVsX1F1aW50ZXJvQEphYmlsLmNvbSJ9.Hs8T2W9E4bOpu_KuYizxCe5beYqo5_37zHmarl-0ESz01QvkIoseO7UiKiMsRX4D8pfrzokDDc5yYtCRgKwXuk207ZxjzkYHO8KQ2Ejg3POkIfKWUM7vyTcvc1M-UI4C__R0iZwXzJYQrDOOYAp4mEwJU_FtA4JkAlXd9KN9GRYyH-BYicnG3b1rYs_3L2h6eetiSg2a25Jb3yrDnTy3MraKn4Ep2XeadI2wHQNMfE5VK9jX9ZLMFhTAc5sZgGlvcCSPay52m7yR8ENuSssZO07LeLQQYYz6NKitnpQ2z73uW_c02JDIMWT8_vOik0a-Rqmi-hIXW9YezWPH2bYahw'
  //         // return the headers to the context so httpLink can read them
  //         return {
  //           headers: {
  //             ...headers,
  //             authorization: token ? `Bearer ${token}` : "",
  //           }
  //         }
  //       });
        
  //       return {
  //         cache: new InMemoryCache(),
  //         link: authLink.concat(httpLink.create({
  //           uri: 'https://b6g1kvbu8f.execute-api.us-east-1.amazonaws.com/dev/gql',
  //         })),
  //       };
  //     },
  //     deps: [HttpLink],
  //   },
  // ]
})
export class ContactModule {}

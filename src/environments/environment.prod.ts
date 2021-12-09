import { environmentVariables } from "src/app/config/environment-variables";

export const environment = {
  production: true,
  endpoints: {
    apiUrl: environmentVariables.API_URL
  }
};

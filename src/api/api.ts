import OpenAPIClientAxios from 'openapi-client-axios';

const api = new OpenAPIClientAxios({
  definition: 'https://api.msq.app/api-json',
});
api.init();

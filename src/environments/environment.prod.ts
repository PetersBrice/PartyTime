export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allSeance: '/api/programme',
      oneSeance: '/api/programme/:id'
    }
  }
};

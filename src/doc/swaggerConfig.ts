export const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Wiselink Events',
      version: '1.0.0',
      description: 'API Documentation',
    },
  },
  apis: [
    './src/event/infrastructure/route/**/*.ts',
    './src/user/infrastructure/routes/**/*.ts',
  ], 
};

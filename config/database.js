module.exports = ({ env }) => ({
  defaultConnection: 'default',
  rest: {
    defaultLimit: 1000,
    maxLimit: 1000,
  },
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

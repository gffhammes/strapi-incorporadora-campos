module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  connections: {
    default: {
      options: {
        "debug": true,
        "pool": {
          "min": 0,
          "max": 10,
          "idleTimeoutMillis": 30000,
          "createTimeoutMillis": 30000,
          "acquireTimeoutMillis": 30000
        }
      }
    }
  }
};

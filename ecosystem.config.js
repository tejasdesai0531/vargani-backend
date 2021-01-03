module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'Vargani-Staging',
      script: 'npm',
      args: 'run start',
      "env": {
        "PORT": 3000,
        "NODE_ENV": "staging"
      },
    },

    {
      name: 'Vargani-Staging1',
      script: 'npm',
      args: 'run start',
      "env": {
        "PORT": 3001,
        "NODE_ENV": "production"
      },
    },

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    staging: {
      key: '../vargani001.pem',
      user: 'ubuntu',
      host: '54.152.125.151',
      ref: 'origin/develop',
      repo: 'https://github.com/tejasdesai0531/vargani-backend.git',
      path: '/home/ubuntu/Vargani-Staging',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --only Vargani-Staging',
    },

    staging1: {
      key: '../vargani001.pem',
      user: 'ubuntu',
      host: '54.152.125.151',
      ref: 'origin/develop',
      repo: 'https://github.com/tejasdesai0531/vargani-backend.git',
      path: '/home/ubuntu/Vargani-Staging1',
      'post-deploy': 'npm install --production && pm2 startOrRestart ecosystem.config.js --only Vargani-Staging1 --watch',
    }
  }
};

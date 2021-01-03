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
        "PORT": 3000 
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
      host: '100.26.216.70',
      ref: 'origin/develop',
      repo: 'https://github.com/tejasdesai0531/vargani-backend.git',
      path: '/home/ubuntu/Vargani-Staging',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --only Vargani-Staging',
    }
  }
};

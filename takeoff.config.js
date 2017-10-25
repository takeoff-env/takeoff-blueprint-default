let sleep = 'sleep 5';
if (process.platform === 'win32') sleep = 'sleep -s 5';

module.exports = environment => [
  { cmd: `mkdir -p envs/${environment}`, message: 'Creating environment' },
  { cmd: `git submodule init`, message: `Initialising submodules`, cwd: `envs/${environment}` },
  { cmd: `git submodule update`, message: `Cloning submodules`, cwd: `envs/${environment}` },
  { cmd: `npm install`, message: 'Installing blueprint dependencies', cwd: `envs/${environment}` },
  { cmd: `npm run bootstrap`, message: 'Bootstrapping environments', cwd: `envs/${environment}` },
  {
    cmd: `docker-compose -f docker/docker-compose.yml build --no-cache`,
    message: 'Running Docker Compose Build',
    cwd: `envs/${environment}`,
  },
  {
    cmd: `docker-compose -f docker/docker-compose.yml up -d db`,
    message: 'Triggering database creation',
    cwd: `envs/${environment}`,
  },
  { cmd: `${sleep}`, message: 'Waiting for database' },
  {
    cmd: `docker-compose -f docker/docker-compose.yml stop db`,
    message: 'Shutting down database',
    cwd: `envs/${environment}`,
  },
];

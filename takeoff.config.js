let sleep = 'sleep 5';
if (process.platform === 'win32') sleep = 'sleep -s 5';

module.exports = ({ command, shell, args, workingDir }) => {
  const submoduleInit = shell.exec(`npm install`);
  if (submoduleInit.code !== 0) return false;

  const bootstrap = shell.exec(`node_modules/.bin/lerna bootstrap`);
  if (bootstrap.code !== 0) return false;

  const build = shell.exec(`docker-compose -f docker/docker-compose.yml build --no-cache`);
  if (build.code !== 0) return false;

  const dbinit = shell.exec(`docker-compose -f docker/docker-compose.yml build --no-cache \
&& ${sleep} && docker-compose -f docker/docker-compose.yml stop db`);
  if (dbinit.code !== 0) return false;

  return true;
}

// module.exports = environment => [
//   { cmd: `npm install`, message: 'Installing blueprint dependencies', cwd: `envs/${environment}` },
//   { cmd: `node_modules/.bin/lerna bootstrap`, message: 'Bootstrapping environments', cwd: `envs/${environment}` },
//   {
//     cmd: `docker-compose -f docker/docker-compose.yml build --no-cache`,
//     message: 'Running Docker Compose Build',
//     cwd: `envs/${environment}`,
//   },
//   {
//     cmd: `docker-compose -f docker/docker-compose.yml up -d db`,
//     message: 'Triggering database creation',
//     cwd: `envs/${environment}`,
//   },
//   { cmd: `${sleep}`, message: 'Waiting for database' },
//   {
//     cmd: `docker-compose -f docker/docker-compose.yml stop db`,
//     message: 'Shutting down database',
//     cwd: `envs/${environment}`,
//   },
// ];

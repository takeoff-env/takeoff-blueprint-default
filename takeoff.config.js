let sleep = 'sleep 5';
if (process.platform === 'win32') sleep = 'sleep -s 5';

module.exports = ({ command, shell, args, opts, workingDir, ProgressBar }) => {

  const bar = new ProgressBar({
    total: 4
  });

    const submoduleInit = shell.exec(`npm install`, { cwd: __dirname, silent: opts.v ? false : true });
    if (submoduleInit.code !== 0) return false;

    bar.tick();

    const bootstrap = shell.exec(`node_modules/.bin/lerna bootstrap`, {
        cwd: __dirname,
        silent: opts.v ? false : true
    });
    if (bootstrap.code !== 0) return false;

    bar.tick();

    const build = shell.exec(`docker-compose -f docker/docker-compose.yml build --no-cache`, {
        cwd: __dirname,
        silent: opts.v ? false : true
    });
    if (build.code !== 0) return false;

    bar.tick();

    const dbinit = shell.exec(
        `docker-compose -f docker/docker-compose.yml build --no-cache \
&& ${sleep} && docker-compose -f docker/docker-compose.yml stop db`,
        { cwd: __dirname, silent: opts.v ? false : true }
    );
    if (dbinit.code !== 0) return false;

    bar.tick();

    return true;
};

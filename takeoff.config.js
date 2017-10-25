let sleep = 'sleep 5';
if (process.platform === 'win32') sleep = 'sleep -s 5';

module.exports = ({ command, shell, args, options, workingDir }) => {
    const submoduleInit = shell.exec(`npm install`, { cwd: __dirname, silent: options.v ? false : true });
    if (submoduleInit.code !== 0) return false;

    const bootstrap = shell.exec(`node_modules/.bin/lerna bootstrap`, {
        cwd: __dirname,
        silent: options.v ? false : true
    });
    if (bootstrap.code !== 0) return false;

    const build = shell.exec(`docker-compose -f docker/docker-compose.yml build --no-cache`, {
        cwd: __dirname,
        silent: options.v ? false : true
    });
    if (build.code !== 0) return false;

    const dbinit = shell.exec(
        `docker-compose -f docker/docker-compose.yml build --no-cache \
&& ${sleep} && docker-compose -f docker/docker-compose.yml stop db`,
        { cwd: __dirname, silent: options.v ? false : true }
    );
    if (dbinit.code !== 0) return false;

    return true;
};

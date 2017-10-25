let sleep = 'sleep 5';
if (process.platform === 'win32') sleep = 'sleep -s 5';

module.exports = ({ command, shell, args, opts, workingDir, ProgressBar }) => {
    const bar = new ProgressBar({
        schema: ' :title (:percent :elapseds :etas) [:bar]',
        total: 5
    });

    let currentTitle = { title: 'Doing NPM Install' };

    const updater = setInterval(() => {
        bar.update(0, currentTitle);
    }, 1000);

    bar.update(0, currentTitle);

    const submoduleInit = shell.exec(`npm install`, { cwd: __dirname, silent: opts.v ? false : true });
    if (submoduleInit.code !== 0) return false;

    currentTitle = { title: 'Bootstrap Environment' };
    bar.tick(1, currentTitle);

    const bootstrap = shell.exec(`node_modules/.bin/lerna bootstrap`, {
        cwd: __dirname,
        silent: opts.v ? false : true
    });
    if (bootstrap.code !== 0) return false;

    currentTitle = { title: 'Running Docker Build' };
    bar.tick(1, currentTitle);

    const build = shell.exec(`docker-compose -f docker/docker-compose.yml build --no-cache`, {
        cwd: __dirname,
        silent: opts.v ? false : true
    });
    if (build.code !== 0) return false;

    currentTitle = { title: 'Initilising Database' };
    bar.tick(1, currentTitle);

    const dbinit = shell.exec(
        `docker-compose -f docker/docker-compose.yml build --no-cache \
&& ${sleep} && docker-compose -f docker/docker-compose.yml stop db`,
        { cwd: __dirname, silent: opts.v ? false : true }
    );
    if (dbinit.code !== 0) return false;

    currentTitle = { title: 'Done' };
    bar.tick(1, currentTitle);

    clearInterval(updater);

    return true;
};

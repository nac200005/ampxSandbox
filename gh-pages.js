import { publish } from 'gh-pages';

publish('build', {
        branch: 'gh-pages',
        repo: 'https://github.com/realTristan/engage.hyperdrive.git',
        dotfiles: true,
        user: {
            name: 'Tristan Simpson',
            email: 'heytristaann@gmail.com'
        }
    },
    () => { console.log('Github Page Deployed') }
);
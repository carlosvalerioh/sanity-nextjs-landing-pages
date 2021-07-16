export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f1cfb29054a66c0cdc372a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mtbqwtsg',
                  apiId: '9667a451-8acd-4e12-ae88-591b5b90cf34'
                },
                {
                  buildHookId: '60f1cfb323f1bc8800bad82a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ohzhzkox',
                  apiId: '18da83f2-f4e3-458f-9ad9-84dbcbc95798'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carlosvalerioh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ohzhzkox.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

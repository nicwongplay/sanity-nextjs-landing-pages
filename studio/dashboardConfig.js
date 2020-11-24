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
                  buildHookId: '5fbc9abcfbe4056b6a3b6193',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jfnqc6i1',
                  apiId: '63f17520-853f-4579-b59d-e811d1aca8e5'
                },
                {
                  buildHookId: '5fbc9abcf949795775e24255',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5ti1pg88',
                  apiId: 'e3e4b185-fd95-4d1f-af75-f0cb3d29d5c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicwongplay/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5ti1pg88.netlify.app', category: 'apps'}
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

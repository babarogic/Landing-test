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
                  buildHookId: '5cfd4e778f28fef7f385b527',
                  title: 'Sanity Studio',
                  name: 'Landing-test-studio',
                  apiId: '1d9b4621-75f0-40c3-83be-19e27850ed25'
                },
                {
                  buildHookId: '5cfd4e77603e094201175af7',
                  title: 'Landing pages Website',
                  name: 'Landing-test-web',
                  apiId: '963ae0f9-36aa-4730-8587-ea4bdc315a92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/babarogic/Landing-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Landing-test-web.netlify.com', category: 'apps'}
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

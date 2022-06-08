export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a123d345f99d11df0c7ef1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pu157zq9',
                  apiId: '03e125b3-8cef-48e5-a631-13768c89b814'
                },
                {
                  buildHookId: '62a123d345f99d122f0c7bf6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bmkuvbig',
                  apiId: 'bdb1cb95-c638-420b-95d0-3200595f4d09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adam-cohen-amplitude/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bmkuvbig.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

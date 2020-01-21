export default {
  widgets: [
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
                  buildHookId: '5e270a7419821ce9b5e4c4d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-q27x3yf9',
                  apiId: '677e8358-70a4-4019-b167-e89cf8f4be87'
                },
                {
                  buildHookId: '5e270a753ce844686c97dca8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kyxm1cmc',
                  apiId: '505a4332-5721-4fa0-aade-d86f707550df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RajatRawat/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kyxm1cmc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

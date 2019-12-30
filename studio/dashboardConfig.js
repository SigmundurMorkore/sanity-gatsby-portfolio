export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e09555daf09c6d487a2e76d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ahz1gc3a',
                  apiId: '4ce2c098-f12c-4109-98ca-ced7e1b19430'
                },
                {
                  buildHookId: '5e09555daf09c6c1e1a2e772',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xhim234q',
                  apiId: '2c331ee4-e763-404b-863d-9f0d4a200d90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SigmundurMorkore/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xhim234q.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

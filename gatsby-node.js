exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
exports.createPages = async({graphql, actions: {createPage}}) => {
    const {data: {gcms: {decks}}} = await graphql(`
        {
            gcms {
                decks(stage: PUBLISHED) {
                    id
                    slug
                }
            }
        }
    `);

    decks.forEach(({id, slug}) => createPage({
        path: `/decks/${slug}`,
        component: require.resolve(`./src/templates/DetailsPage.js`), 
        context: {
            id
        }
    }))
}
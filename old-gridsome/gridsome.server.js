// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, addSchemaResolvers }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // By default, essays are drafts
    addSchemaResolvers({
      Essay: {
        draft: {
          type: "Boolean",
          resolve(obj) {
            if ("draft" in obj) return obj.draft;
            else return true;
          },
        },
        hn: {
          type: "Int",
          resolve(obj) {
            if ("hn" in obj) return obj.hn;
            else return null;
          },
        },
      },
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

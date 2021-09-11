module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/style/variables.sass"
            @import "~bulma"
            @import "@/style/main.sass"
            `,
      },
    },
  },
};

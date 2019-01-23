const Home = class {
  constructor(models) {
    this.models = models;
  }

  getTemplate() {
    let template = `
    <template >
      <div class="home container">
        <h1>vue-crudgen</h1>
        <div id="nav">
          routesTemplate
        </div>
      </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style lang="css" scoped>
      #nav {
        text-transform: capitalize;
      }
      .home {
        min-height: 500px;
      }
      h1 {
        text-align: center
      }
    </style>
    `;
    let routesTemplate = ``;
    for (var i = 0; i < this.models.length; i++) {
      routesTemplate += `<div><router-link to="/${this.models[i]}">${
        this.models[i]
      }</router-link></div>\n`;
    }

    template = template.replace(`routesTemplate`, routesTemplate);
    return template;
  }
};

module.exports = Home;

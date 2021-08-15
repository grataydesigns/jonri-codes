const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.js');
  const caseStudyTemplate = path.resolve('src/templates/caseStudyTemplate.js');

  return graphql(`
    {
      blogs: allMdx {
        nodes {
          headings {
            value
            depth
          }
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      projects: allMdx(
        filter: { fileAbsolutePath: { glob: "**/projects/**/*.mdx" } }
      ) {
        nodes {
          headings {
            value
            depth
          }
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.blogs.nodes;
    const projects = result.data.projects.nodes;

    posts.forEach((post) => {
      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      });
    });

    projects.forEach((project) => {
      createPage({
        path: `/portfolio${project.fields.slug}`,
        component: caseStudyTemplate,
        context: {
          slug: project.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       fallback: {
//         path: require.resolve('path-browserify'),
//         assert: require.resolve('assert/'),
//         fs: require.resolve('fs'),
//       },
//     },
//   });
// };

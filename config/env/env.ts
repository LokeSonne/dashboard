/**
 * THIS FILE IS GENERATED by `gulp env` command from `env.json`
 * Generated on <%= new Date() %>
 */

export const ENV = {<% _.forEach(env, function (v, k) { %>
    <%= k %>: <%= _.isString(v) ? "\'" + v + "\'" : v %>,<% }) %>
};

System.register(['./todo.model', './todolist.component', './todolist.routes', './completed-filter.pipe', './todolist.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (todo_model_1_1) {
                exportStar_1(todo_model_1_1);
            },
            function (todolist_component_1_1) {
                exportStar_1(todolist_component_1_1);
            },
            function (todolist_routes_1_1) {
                exportStar_1(todolist_routes_1_1);
            },
            function (completed_filter_pipe_1_1) {
                exportStar_1(completed_filter_pipe_1_1);
            },
            function (todolist_module_1_1) {
                exportStar_1(todolist_module_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map
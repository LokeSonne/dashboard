System.register(['./todolist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todolist_component_1;
    var TodolistRoutes;
    return {
        setters:[
            function (todolist_component_1_1) {
                todolist_component_1 = todolist_component_1_1;
            }],
        execute: function() {
            exports_1("TodolistRoutes", TodolistRoutes = [
                { path: 'todolist', component: todolist_component_1.TodolistComponent }
            ]);
        }
    }
});
//# sourceMappingURL=todolist.routes.js.map
System.register(['./completed-filter.pipe', './todo.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var completed_filter_pipe_1, todo_model_1;
    return {
        setters:[
            function (completed_filter_pipe_1_1) {
                completed_filter_pipe_1 = completed_filter_pipe_1_1;
            },
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            describe('CompletedFilterPipe', function () {
                var pipe;
                var todos = [
                    new todo_model_1.Todo('test1', true),
                    new todo_model_1.Todo('test2', false)
                ];
                beforeEach(function () {
                    pipe = new completed_filter_pipe_1.CompletedFilterPipe();
                });
                it('should return original todos when pass true', function () {
                    var result = pipe.transform(todos, true);
                    expect(result).toEqual(todos);
                });
                it('should return not-completed todos when pass false', function () {
                    var result = pipe.transform(todos, false);
                    result.forEach(function (todo) { return expect(todo.done).toBeFalsy(); });
                });
            });
        }
    }
});
//# sourceMappingURL=completed-filter.pipe.spec.js.map
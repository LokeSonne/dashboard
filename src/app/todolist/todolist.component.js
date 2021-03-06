System.register(['@angular/core', './todo.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_model_1;
    var TodolistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            TodolistComponent = (function () {
                function TodolistComponent() {
                    this.showCompleted = true;
                    this.todo = new todo_model_1.Todo('Add me to list!', false);
                    this.list = [
                        new todo_model_1.Todo('Its cool'),
                        new todo_model_1.Todo('Hello', true)
                    ];
                }
                TodolistComponent.prototype.addTodo = function () {
                    this.list = this.list.concat(todo_model_1.Todo.clone(this.todo));
                    this.todo.clear();
                };
                TodolistComponent.prototype.delTodo = function (todoIndex) {
                    this.list = this.list.filter(function (todo, index) { return index !== todoIndex; });
                };
                TodolistComponent = __decorate([
                    core_1.Component({
                        selector: 'vs-todolist',
                        templateUrl: 'app/todolist/todolist.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodolistComponent);
                return TodolistComponent;
            }());
            exports_1("TodolistComponent", TodolistComponent);
        }
    }
});
//# sourceMappingURL=todolist.component.js.map
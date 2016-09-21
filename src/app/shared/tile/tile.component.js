System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TileComponent = (function () {
                function TileComponent() {
                    this.barChartOptions = {
                        scaleShowVerticalLines: false,
                        responsive: true
                    };
                    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
                    this.barChartType = 'bar';
                    this.barChartLegend = true;
                    this.barChartData = [
                        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
                        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
                    ];
                }
                // events
                TileComponent.prototype.chartClicked = function (e) {
                    console.log(e);
                };
                TileComponent.prototype.chartHovered = function (e) {
                    console.log(e);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TileComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TileComponent.prototype, "xs_size", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TileComponent.prototype, "sm_size", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TileComponent.prototype, "md_size", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TileComponent.prototype, "lg_size", void 0);
                TileComponent = __decorate([
                    core_1.Component({
                        selector: 'vs-tile',
                        templateUrl: 'app/shared/tile/tile.component.html',
                        styleUrls: ['app/shared/tile/tile.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TileComponent);
                return TileComponent;
            }());
            exports_1("TileComponent", TileComponent);
        }
    }
});
//# sourceMappingURL=tile.component.js.map
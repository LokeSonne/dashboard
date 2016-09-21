import { Component, Input, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Api } from '../';

@Component({
    selector: 'vs-tile',
    templateUrl: 'app/shared/tile/tile.component.html',
    styleUrls: ['app/shared/tile/tile.component.css'],
    providers: [Api]
})
export class TileComponent implements OnInit {
    private _observables: Observable<Response>[] = [];

    @Input() title: string;
    @Input() xs_size: number;
    @Input() sm_size: number;
    @Input() md_size: number;
    @Input() lg_size: number;
    @Input() type: string;

    constructor(private _api: Api) { }

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    ngOnInit(): void {
        let obs = this._api.getData(this.type);
        this._observables.push(obs);
        obs.subscribe(
            res => {
                console.log('Request success!');
                console.log(res);
            },
            err => {
                console.log('Request error!');
                console.log(err);
            });
    }
}

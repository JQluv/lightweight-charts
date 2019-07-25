import { IFormatter } from '../formatters/iformatter';

import { AutoscaleInfo } from './autoscale-info';
import { ChartModel } from './chart-model';
import { DataSource } from './data-source';
import { IPriceDataSource } from './iprice-data-source';
import { TimePointIndex } from './time-data';

export abstract class PriceDataSource extends DataSource implements IPriceDataSource {
	private readonly _model: ChartModel;

	public constructor(model: ChartModel) {
		super();
		this._model = model;
	}

	public model(): ChartModel {
		return this._model;
	}

	public minMove(): number {
		return 0;
	}

	public autoscaleInfo(startTimePoint: TimePointIndex, endTimePoint: TimePointIndex): AutoscaleInfo {
		return new AutoscaleInfo(null);
	}

	public abstract firstValue(): number | null;
	public abstract formatter(): IFormatter;
	public abstract priceLineColor(lastBarColor: string): string;
}

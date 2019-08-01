import React, { Component } from 'react';
import { AllHealthRisks } from '../../Features/HealthRisks/AllHealthRisks';
import { QueryCoordinator } from '@dolittle/queries/dist/commonjs/QueryCoordinator';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ReportsPerHealthRiskPerDay from '../Reports/ReportsPerHealthRiskPerDay';

import './HealthRiskSelector.scss';

export default class HealthRiskSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            healthRisks: [],
            selected: ''
        };
    }

    componentDidMount() {
        const query = new AllHealthRisks();
        const queryCoordinator = new QueryCoordinator();

        queryCoordinator.execute(query).then(res => {
            if (res.items[0] != null) {
                this.setState({ healthRisks: res.items, selected: res.items[0].name });
            } else {
                this.setState({ healthRisks: res.items, selected: null });
            }
        });
    }

    saveSelectedValue(event) {
        this.setState({
            selected: event.target.value
        });
    }

    renderOptions() {

        var i = this.state.healthRisks.map(
            healthRisk => (
                <MenuItem
                    key={healthRisk.healthRiskNumber}
                    value={healthRisk.name}
                >{healthRisk.name}</MenuItem>)
        );
        console.log(i)
        return i;
    }

    render() {
        return (
            <div className="tableContainer">
                <h2 className="headline">Reports for
                <Select className="headline-select"
                        value={this.state.selected}
                        onChange={this.saveSelectedValue.bind(this)}
                    >
                        {this.renderOptions()}
                    </Select>
                </h2>

                <h5>Reports the last 7 days</h5>
                <ReportsPerHealthRiskPerDay healthRisk={this.state.selected} />
            </div>
        );
    }
}
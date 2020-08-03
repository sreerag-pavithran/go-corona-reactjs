import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import StateData from './stateData';

class India extends Component {
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        fetch('https://corona.lmao.ninja/v2/countries/india')
        .then(response => response.json())
        .then(datas => this.setState({ data: datas}))
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <img src="https://www.countryflags.io/in/flat/64.png" alt="Flag"/>
                        <h3>INDIA</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <Card className="badge badge-primary" style={{ width: '18rem' }}>
                                    <Card.Body className="text-center">
                                        <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{this.state.data.cases}</h3>
                                        <Card.Text>
                                        [ Today : {this.state.data.todayCases}  ]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-3">
                                <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                    <Card.Body className="text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{this.state.data.active}</h3>
                                        <Card.Text>
                                        [ Today : Same as Above  ]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-3">
                                <Card className="badge badge-success" style={{ width: '18rem' }}>
                                    <Card.Body className="text-center">
                                        <Card.Title>RECOVERED</Card.Title>
                                        <h3>{this.state.data.recovered}</h3>
                                        <Card.Text>
                                        [ Today : {this.state.data.todayCases} ]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-3">
                                <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                    <Card.Body className="text-center">
                                        <Card.Title>TOTAL DEATHS</Card.Title>
                                        <h3>{this.state.data.deaths}</h3>
                                        <Card.Text>
                                        [ Today : {this.state.data.todayDeaths}  ]
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <StateData />   
                </div>
            </div>

        )
    }
}

export default India;
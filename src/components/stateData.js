import React, {Component} from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';


class StateData extends Component {
    constructor(){
        super();
        this.state = {
            stateData: {}
        }
    }

    componentDidMount(){
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response=> response.json())
        .then(states=> this.setState({ stateData: states}))
    }
    render(){
        let keys = Object.keys(this.state.stateData)
        console.log("THIS IS DISTRICTS" ,keys);
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Accordion>
                            {
                                keys.map((item, key)=>{
                                    let districts = this.state.stateData[item].districtData;
                                    let distric_keys = Object.keys(districts);
                                    let total_active = 0;
                                    let total_confirmed = 0;
                                    let total_deaths = 0;
                                    let total_recover = 0;


                                    let districts_list = [];
                                    for(let i in districts){
                                        total_active += districts[i].active;
                                        total_confirmed += districts[i].confirmed;
                                        total_recover += districts[i].recovered;
                                        total_deaths += districts[i].deceased;
                                        let ob = districts[i];
                                        ob["district_name"] = i;
                                        districts_list.push(ob)
                                    }

                                    return(
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} className="btn-outline" variant="outline-dark" eventKey={key}>
                                                {item} -  TOTAL CASES - {total_confirmed}
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <td>
                                                                District
                                                            </td>
                                                            <td>
                                                                Confirmed
                                                            </td>
                                                            <td>
                                                                Active
                                                            </td>
                                                            <td>
                                                                Deaths
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            districts_list.map((item, key)=>{
                                                                return(
                                                                    <tr>
                                                                         <td>{item.district_name}</td>
                                                                         <td>{item.confirmed}</td>
                                                                         <td>{item.active}</td>
                                                                         <td>{item.deceased}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })
                            }
                            </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateData;
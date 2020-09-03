import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { TaskList } from "../TaskList";
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Login from "./Login";
import Moment from 'react-moment';
import { Container } from '@material-ui/core'
import MiniDrawer from "./MiniDrawer";  
import Grid from '@material-ui/core/Grid';
class TaskApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            descriprion: '',
            status: "",
            dueDate: moment(),
            responsible: {
                name: "Daniel Gomez",
                mail: "daniel.gomez-su@mail.com"
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    render() {



        return (
            <div className="TaskApp">
                <MiniDrawer />
                <Container fixed>
                    <br />
                    <br />
                <form onSubmit={this.handleSubmit} className="todo-form">
                   
                        <h3>New task</h3>

                    <Grid container spacing={2}>
                    <Grid item xs>
                                <label>
                                    responsible information
                                     <br />
                                    <br />
                                <TextField label="Name" variant="outlined"
                                    id="Name"
                                    name="Name"
                                    value="Daniel Gomez">
                                    disabled
                                </TextField>
                                    <br />
                                    <br />
                                <TextField label="Mail" variant="outlined"
                                    id="Mail"
                                    name="Mail"
                                    value="daniel.gomez-su@mail.com">
                                    disabled
                                </TextField>
                                </label>

                                <br />
                                <br />
                         <label>
                                    Task Information
                                    <br />
                                    <br />
                            <TextField label="Descripcion" variant="outlined"
                                id="descripcion"
                                name="descripcion"
                                onChange={this.handleChange}
                                value={this.state.descripcion}>
                            </TextField>

                            <br />
                            <br />
                     
                                   
                            <TextField label="status" variant="outlined" 
                    
                                id="status"
                                name="status"
                                type="status"
                                onChange={this.handleChange}
                                value={this.state.status}>
                            </TextField>
                            <br />
                            <br />
                        </label>
                    </Grid>
                     <Grid item xs>

                    <label>
                            Select a date for task:
                        <br />
                     <center>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <DatePicker autoOk
                                orientation="landscape"
                                variant="static"
                                openTo="date"
                                value={this.state.dueDate}
                                onChange={this.handleDateChange} />
                                </MuiPickersUtilsProvider>
                                </center>
                     </label>
                    
                     </Grid>
                            <br />
                        </Grid> 
                        <br />
                        <br />
                    <Button type="Submit" variant="outlined" color="primary" >
                        Add #{this.state.items.length + 1}
                    </Button>
                     
                </form>
              
                <br />
                <br />
                    <TaskList taskList={this.state.items} />
                </Container>
                
            </div>
        );
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleChange(e) {
        var property = e.target.id
        
        this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        console.log(); 

        e.preventDefault();

        if (!this.state.descripcion.length || !this.state.status.length || !this.state.dueDate)
            return;
        console.log(this.state.dueDate.toDateString());

        const newItem = {
            descripcion: this.state.descripcion,
            status: this.state.status,
            dueDate: moment(this.state.dueDate.toDateString()),
            responsible: this.state.responsible
        };
        console.log(newItem);
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            descripcion: '',
            status: '',
            dueDate: moment()
        }));
    }

}

export default TaskApp;
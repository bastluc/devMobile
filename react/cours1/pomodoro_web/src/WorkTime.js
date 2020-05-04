import React from "react"

export default class WorkTime extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            title: "Travail",
            titleColor: "black",
            showCount: "none",
            countColor: "black"
        };
    }

    work = () => {
        this.setState({
            count: 60,
            title: "Travail",
            titleColor: "red",
            showCount: "block"
        });
        let workInterval = setInterval(
            ()=> {
                this.setState({count: this.state.count-1});

                if(this.state.count <= 20){
                    this.setState({countColor: "red"});
                }

                if(this.state.count === 0){
                    clearInterval(workInterval);
                    this.setState({countColor: "black"});
                    this.pause()
                }
            },
            1000
        )
    }

    pause = () => {
        this.setState({
            count: 30,
            title: "Pause",
            titleColor: "green"
        });
        let workInterval = setInterval(
            ()=> {
                this.setState({count: this.state.count-1});

                if(this.state.count <= 20){
                    this.setState({countColor: "red"});
                }

                if(this.state.count === 0){
                    clearInterval(workInterval);
                    this.setState({countColor: "black"});
                    this.work();
                }
            },
            1000
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.work}>Lancer</button>
                <div style={{display: this.state.showCount}}>
                    <p style={{color: this.state.titleColor, fontWeight: "bold"}}>{this.state.title}</p>
                    <p style={{color: this.state.countColor}}>{this.state.count}</p>
                </div>
            </div>
        )
    }
}
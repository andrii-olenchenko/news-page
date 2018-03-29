let Appbar = mui.react.Appbar,
    Button = mui.react.Button,
    Container = mui.react.Container;

class App extends React.Component {
    constructor(props) {
        super(props); console.log(props);
        //this.state = props.data.current; // {selectedClientId, selectedNewsType}
        //this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <Appbar></Appbar>
                <div className="mui--appbar-height"></div>

                <div className="mui-container-fluid">
                <div className="mui-row">
                        <div className="mui-col-md-4 mui--divider-right">
                            <Clients clients={this.props.data.clients} />
                        </div>
                        <div className="mui-col-md-8 Xmui--divider-left">
                            { this.props.data.client ? <NewsPanel client={this.props.data.client} /> : <InfoPanel /> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


let Appbar = mui.react.Appbar,
    Button = mui.react.Button,
    Container = mui.react.Container;
let Divider = mui.react.Divider;



class App extends React.Component {
    render() {
        return (
            <div>
                <Appbar></Appbar>
                <div className="mui--appbar-height"></div>

                <div className="mui-container-fluid">
                    <div className="mui-row">
                        <div className="mui-col-md-4">
                            
                            <ul className="pro-list">
                                <li>
                                    Common
                                    <div class="mui--text-dark-secondary" style={{"fontSize":12}}>Global news are available for all clients</div>
                                </li>
                                <li>Bacardi Limited (Staging Demo)</li>
                                <li>Burger King (Demo)</li>
                                <li>Client with Customizer</li>
                                <li>Heineken International</li>
                                <li>Nestlé (Demo)</li>
                                <li>Oral Care</li>
                                <li>Salon Professional Demo</li>
                                <li>Swarovski Group</li>
                            </ul>
                        </div>
                        <div className="mui-col-md-8 mui--divider-left">
                            <InfoPanel />
                            <Container>
                                <Button color="primary">button</Button>
                            </Container>
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('example'));
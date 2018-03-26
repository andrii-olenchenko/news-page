class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
          }
        render(){
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ClientList />
                        </div>
                        <div className='col-md-8'>
                           <Panel />
                        </div>
                    </div>
                </div>
            );
        }
    }

    class Panel extends React.Component {
        // constructor(props) {
        //     super(props);
        //     this.state = {selection: "ProMostTypeA"};
        // }
        render(){
            return (
                <div>
                    <ProMostTypeA />
                </div>
            );
        };
    };

    class ProMostTypeA extends React.Component {
        render(){
            return (
                <div>
                    <h4>ProMost News Type A</h4>
                    <span className='text-muted'>Type A News is original Client News. Has properties: Start date time, End  data time, Target territories, target brands. Can consist attachments. 
                    Can have image.</span>

                    <h5>Future News</h5>
                    <NewsTable />

                    <h5>Actula News</h5>
                    <NewsTable />

                    <h5>Past News</h5>
                    <NewsTable />
                </div>
            );
        };
    };

    class NewsTable extends React.Component {
        render(){
            return (
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Start Date Time</th>
                        <th>Headline</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Feb 20, 2018 00:01 PST</td>
                            <td>Welcome to ...</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <ProMostForm />
                            </td>
                        </tr>
                    </tbody>
                </table>   
            );
        };
    }

    class ProMostForm extends React.Component {
        render() {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile" />
                        <p className="help-block">Example block-level help text here.</p>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Check me out
                        </label>
                      </div>
                      <button type="submit" className="btn btn-default">Submit</button> 
                </form>
            );
        }
    }

    class ClientList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
          }
        render(){
            return (
                <div className="list-group">
                    <a href="#" className="list-group-item"><b>ProMost</b></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type A</em></a>
                    <a href="#" className="list-group-item"><b>Client 1</b></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type A</em></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type B</em></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type C</em></a>
                    <a href="#" className="list-group-item"><b>Client 2</b></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type A</em></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type B</em></a>
                    <a href="#" className="list-group-item"><em>&nbsp;&nbsp;&nbsp;Type C</em></a>
                </div>
            );
        };
    };
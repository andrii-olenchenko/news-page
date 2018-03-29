 function InfoPanel(props) {
    return (
            <div>
                <p className='mui--text-dark-secondary'>
                    News appear on Buyer's Home page. There are two main type of News: <b>ProMost</b> news and <b>Client</b> news. 
                    <b>ProMost</b> news is kind of common news and available for all Buyers of all Clients. Instead <b>Client</b> news 
                    is available for Buyers of the certain Client. For Client's news there are three sub-type: <em>Regular News</em>, 
                    <em>News with Image Only</em> and <em>One Line News</em>. The distinguish between these kinds of news presents in the following table:
                </p>
                    <table className="mui-table mui-table--bordered">
                        <thead>
                        <tr>
                            <th></th><th>Common</th><th colSpan="3">Client</th>
                        </tr>
                        <tr>
                            <th></th><th></th><th>Regular</th><th>Image Only</th><th>One Line</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Headline</td><td>+</td><td>+</td><td>+</td><td>+</td>
                        </tr>
                        <tr>
                            <td>Body</td><td>+</td><td>+</td><td>+</td><td>+</td>
                        </tr> 
                        <tr>
                            <td>startDateTime</td><td>+</td><td>+</td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>endDateTime</td><td>+</td><td>+</td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>Attachments</td><td>+</td><td>+</td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>Image</td><td>+</td><td>+</td><td>+</td><td></td>
                        </tr>
                        <tr>
                            <td>Territories</td><td></td><td>+</td><td></td><td>+</td>
                        </tr>
                        <tr>
                            <td>Brands</td><td></td><td>+</td><td></td><td>+</td>
                        </tr>
                        <tr>
                            <td>Link</td><td></td><td></td><td>+</td><td>+</td>
                        </tr>
                        <tr>
                            <td>Group</td><td></td><td></td><td></td><td>+</td>
                        </tr>
                        </tbody>
                        
                    </table> 
            </div>
        );
}
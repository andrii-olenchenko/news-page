function NewsPanel(props){
    let client = props.client;
    let news = [];
    if (news.length == 0 ){
        return ( 
            <div className="Xmui-panel mui--text-center">
                <div className="Xmui--text-display4 mui--text-dark-hint">Empty</div>
                <button class="mui-btn mui-btn--primary">Add News</button>
            </div> 
        );
    } else {
        return ( <div className="mui-panel">Table</div>);
    }
}
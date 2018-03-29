function Clients(props){
    console.log("Clients props", props);
    const clients = props.clients || [];
    const x = clients.map( it => <li key={it.name}>{it.name}<div className="mui--text-dark-secondary" style={{"fontSize":12}}>{it.desc}</div></li> );
    return (
        <ul className="pro-list">
            { x }
        </ul>
    );
}

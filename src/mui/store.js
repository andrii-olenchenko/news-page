const clients = [
    {name: 'Common', desc:'Global news are available for all clients'},
    {name: 'Bacardi Limited (Staging Demo)', desc:''},
    {name: 'Burger King (Demo)', desc:''},
    {name: 'Client with Customizer', desc:''},
    {name: 'Heineken International', desc:''},
    {name: 'Nestlé (Demo)', desc:''},
    {name: 'Oral Care', desc:''},
    {name: 'Salon Professional Demo', desc:''},
    {name: 'Swarovski Group', desc:''}
];

const news:[
    {id:1, clientId:0, headline: "Pro test1", body:"Pro text body 1", image:"1.gif"},
    {id:2, clientId:0, headline: "Pro test1", body:"Pro text body 1", image:"1.gif"},
    {id:10, clientId:1, type: "A", headline: "Ex test1", body:"Ex text body 1", image:"1.gif", territories:[1], brands:[]},
    {id:11, clientId:1, type: "B", headline: "Ex test2", body:"Ex text body 2", image:"2.gif", territories:[4], brands:[]},
    {id:12, clientId:1, type: "C", headline: "Ex test3", body:"Ex text body 3", image:"3.jpg"},
    {id:20, clientId:2, type: "A", headline: "Or test1", body:"Or text body 1", image:"1.gif", territories:[], brands:[10, 11]},
    {id:21, clientId:2, type: "A", headline: "Or test2", body:"Or text body 2", image:"2.gif", territories:[], brands:[12]},
    {id:22, clientId:2, type: "A", headline: "Or test3", body:"Or text body 3", image:"3.jpg"}
];

const data1 = {
    clients: clients
};

const data2 = {
    clients: clients,
    client: 'common'
};

const data3 = {
    clients: clients,
    client: 'common',
    news: news
};

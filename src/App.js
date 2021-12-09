import React, {useState} from "react";
import Header from "./components/Header";
import AddPost from "./components/AddPost";
import DataFiltering from "./components/DataFiltering";
import Table from "./components/Table";



const App = () => {

    const [entry, setEntry] = useState([
        {date: '2021-12-21', client: 'WEB dream world', service: 'React developing', description: 'Message', duration: '01:00'},
        {date: '2021-11-15', client: 'IT pros', service: 'UX design', description: 'Belenkas', duration: '02:00'},
        {date: '2021-12-15', client: 'IT pros', service: 'testing', description: 'Dzin', duration: '02:00'},
        {date: '2021-12-25', client: 'WEB dream world', service: 'React developing', description: 'Testas SARS', duration: '01:45'}
    ])

    return(
        <div className="container">
            <Header />
            <AddPost/>
            <DataFiltering entry={entry}/>
            <Table entry={entry}/>
        </div>
    )
}

export default App;

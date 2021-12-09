import React, {useEffect, useState} from "react";



const DataFiltering = ({entry}) => {

    const masyvas = [1, 2, 3, 6, 10, 15]

    const kitasMasyvas = masyvas.map(elementas => elementas * 10)

    console.log(kitasMasyvas)

    let arr1 = []
    let arr2 = []
    for(let i of entry){

        arr1.push(i.client)
        arr2.push(i.service)
    }


    const clients = Array.from(new Set(arr1))
    const services = Array.from(new Set(arr2))


    //const [services, setServices] = useState(entry)
   // const [clients, setClients] = useState(entry)


    console.log(Array.from(new Set(clients)))
    console.log(Array.from(new Set(services)))

    //console.log(clients, services)
    //console.log(entry)


    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col" style={{display: 'flex'}}>

                            <label className="input-group-text" htmlFor="inputGroupSelect01">Duomenčų filtravimas:</label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected style={{textAlign: 'center'}}>--Pasirinkite įmonę--</option>

                                {clients.map((client, index) => <option value={index+1}>{client}</option>)}

                            </select>
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected style={{textAlign: 'center'}}>--Pasirinkite paslaugą--</option>

                                {services.map((service, index) => <option value={index+1}>{service}</option>)}

                            </select>


                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary">Taikyti filtrą</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DataFiltering
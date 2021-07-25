import React, { useEffect, useState } from 'react';
import crypto from 'crypto';

const SaveEditClient = ({ sclient, nclient, list, saveFunction }) => {
    //let retrieved = JSON.parse(localStorage.getItem('clientes'));

    const [editClient, setEditClient] = useState();
    const [status, setStatus] = useState(false);
    const [newClient, setNewClient] = useState(null);
   // const [actualClients, setActualClients] = useState(list);

    const [clientId, setClientId] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientPhone, setClientPhone] = useState('');

    useEffect(() => {
        //setActualClients(actualClients);
        if(sclient) {     
            setEditClient(sclient);
            setClientId(sclient.id);       
            setClientName(sclient.name);
            setClientAddress(sclient.address);
            setClientCity(sclient.city);
            setClientPhone(sclient.phone);
        }

        if(nclient) {
            setStatus(true);                   
        }
    }, [sclient, nclient, list]);

    // const handleText = (key, t) => {
    //     switch(key) {
    //         case 'clientName':
    //             setClientName(t);
    //             //console.log(clientName);
    //             break;
    //         case 'clientAddress':
    //             setClientAddress(t);
    //             break;
    //         case 'clientCity':
    //             setClientCity(t);
    //             break;
    //         case 'clientPhone':
    //             setClientPhone(t);
    //             break;
    //         default:
    //             break;
    //     }                
    // }

    const handleSave = (id) => {
        
        
        
       // let retrieved = JSON.parse(localStorage.getItem('clientes'));

        // if(id !== 0) {
        //     const newClient2 = {
        //         id: id,
        //         name: clientName,
        //         address: clientAddress,
        //         city: clientCity,
        //         phone: clientPhone,
        //     }
        //     let retrieved = JSON.parse(localStorage.getItem('clientes'));

        //     retrieved.map((item) => {
        //         if(item.id === id) {
        //             item = newClient2;
        //             // let convertData = JSON.stringify(retrieved);
        //             // localStorage.setItem('clientes', convertData);
        //             return retrieved;
        //         }
        //         return retrieved;
        //     })

        //     localStorage.setItem('clientes', retrieved);
        if(id === 0) {
            //let retrieved = JSON.parse(localStorage.getItem('clientes'));

            const newCLI = {
                id: crypto.randomBytes(20).toString('hex'),
                name: clientName,
                address: clientAddress,
                city: clientCity,
                phone: clientPhone,
            };
            setNewClient(newCLI);
            //console.log(newCLI);
            // list = [...list, newClient];
            // let convertData = JSON.stringify(list);
            // localStorage.setItem('clientes', convertData);
            saveFunction(newClient);
            return newCLI;            
        }


    }

    useEffect(() => {
        if(handleSave !== null) {

            
        }
        
    }, [handleSave]);

    

    // useEffect(() => {
    //     // if(handleSave !== null){
    //     //     setNewClient(handleSave);
    //     // }
    // }, [setActualClients, setNewClient, actualClients, newClient])

    return (
        <div>
            {editClient &&
                <div className="save-element">
                    <h3>Editar</h3>
                    <input type="text" name="name" id="name" placeholder="Nome" value={clientName} onChange={t => setClientName(t.target.value)}/>
                    <input type="text" name="address" id="address" placeholder="Endereço" value={clientAddress} onChange={t => setClientAddress(t.target.value)} />
                    <input type="text" name="city" id="city" placeholder="Cidade" value={clientCity} onChange={t => setClientCity(t.target.value)} />
                    <input type="text" name="phone" id="phone" placeholder="Fone" value={clientPhone} onChange={t => setClientPhone(t.target.value)} />
                    <button onClick={
                        () => {
                            const newCLI = {
                                id: clientId,
                                name: clientName,
                                address: clientAddress,
                                city: clientCity,
                                phone: clientPhone,
                            };
                            return saveFunction(newCLI);
                        }
                    }>Salvar</button>
                </div>
            }

            {editClient === undefined && status ?
                <div className="save-element">
                    <h3>Novo</h3>
                    <input type="text" name="name" id="name" placeholder="Nome" value={clientName} onChange={t => setClientName(t.target.value)}/>
                    <input type="text" name="address" id="address" placeholder="Endereço" value={clientAddress} onChange={t => setClientAddress(t.target.value)} />
                    <input type="text" name="city" id="city" placeholder="Cidade" value={clientCity} onChange={t => setClientCity(t.target.value)} />
                    <input type="text" name="phone" id="phone" placeholder="Fone" value={clientPhone} onChange={t => setClientPhone(t.target.value)} />
                    <button onClick={
                        () => {
                            const newCLI = {
                                id: crypto.randomBytes(20).toString('hex'),
                                name: clientName,
                                address: clientAddress,
                                city: clientCity,
                                phone: clientPhone,
                            };
                            return saveFunction(newCLI);
                        }
                    }>Salvar</button>
                </div>
                : <div></div>
            }
        </div>
    );
};

export default SaveEditClient;
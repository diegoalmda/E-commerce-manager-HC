import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import clients from '../../../constants/clients';
import SaveEditClient from '../SaveEditClient';

const EditClients = (props) => {    
    //localStorage.removeItem('clientes');
    // if (localStorage.getItem("clientes") === null) {
    // }
        
    let convertData = JSON.stringify(clients);
    localStorage.setItem('clientes', convertData);
  
    let retrieved = JSON.parse(localStorage.getItem('clientes'));
    
    
    const [specificClient, setSpecificClient] = useState();  
    const [newClient, setNewClient] = useState(false);
    const [newClientInclude, setNewClientInclude] = useState(null);

    const getData = () => {
        let retrieved = JSON.parse(localStorage.getItem('clientes'));
        
        return retrieved;
    }

    const [client, setClient] = useState(getData());

    const handleDelete = async (id) => {
        //const allData = getData();
        setClient(
            client.filter((item) => {
                return item.id !== id;
            })           
        );
        
        let convertData = JSON.stringify(client);
        localStorage.setItem('clientes', convertData);
        
        
    }

    

   

    const handleEdit = (id) => {
        client.map((item) => {
            if(item.id === id) {
                setSpecificClient(item);
                
                return item;
            }
            return {};
        });        
    }

    const handleNewClient = () => {
        
        setNewClient(true);
    }

    const handleSaved = (clientToSave) => {
        setNewClientInclude(clientToSave);  
        let dataIncludes = getData();
        dataIncludes.push(newClientInclude);
        let convertData = JSON.stringify(dataIncludes);
        localStorage.setItem('clientes', convertData);

        //console.log(dataIncludes);

        let included = false;

        client.forEach(element => {
            if(element.id === clientToSave.id) {
                included = true;                
            }
        });

        //console.log(included);

        if(included === false) {
            setClient(    

                client.reduce((accumulator, currentValue) => {
                  
                    accumulator.push(currentValue);
                  
                  return accumulator;
                }, [clientToSave])
                
            );
        
        } else {
            setClient(
                client.filter((item) => {
                    return item.id !== clientToSave.id;
                
                }).reduce((accumulator, currentValue) => {   
                    accumulator.push(currentValue);
                    return accumulator;
                }, [clientToSave])
            );
        }
        
        
        setNewClient(false);        
    }

    // useEffect(() => {
    //     setNewClient(false);
    // }, [handleSaved]);

    useEffect(() => {
        let dataIncludes = getData();
        dataIncludes.push(newClientInclude);
        let convertData = JSON.stringify(dataIncludes);
        localStorage.setItem('clientes', convertData);
        // setClient(getData());
        // console.log(convertData)
        // console.log(typeof(convertData))
        // console.log(client)
       //console.log(getData())
        
    }, [handleSaved, getData]);

    useEffect(() => {
        //setClient(getData());
    },[client]);

    // useEffect(() => {
    //    //setClient(getData());
    // }, [client]);

    // useEffect(() => {
    //     setSpecificClient(handleEdit);
    // }, [handleEdit, handleDelete, setClient, handleSaved]);
    //list={client}
    return (
        <>            
            <div className="clients-edit">
                <button className="newItem" onClick={handleNewClient}>Adicionar novo cliente</button>
                <SaveEditClient sclient={specificClient} nclient={newClient} saveFunction={handleSaved} />
                {client !== null &&
                <table>
                    <caption>Clientes cadastrados</caption>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>Fone</th>
                            <th colSpan="2">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.map(({id, name, address, city, phone}) => {
                            
                            return(
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{address}</td>
                                    <td>{city}</td>
                                    <td>{phone}</td>
                                    <td><button className="edit" onClick={() => handleEdit(id)}>Editar</button></td>
                                    <td><button className="delete" onClick={() => handleDelete(id)}>Excluir</button></td>
                                </tr>                                
                            );
                        })}
                    </tbody>
                </table> 
                }               
            </div>
        </>
    )
}

export default EditClients;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import products from '../../../constants/products';
import SaveEditProduct from '../SaveEditProduct';

const EditProducts = (props) => {   
        
    let convertData = JSON.stringify(products);
    localStorage.setItem('produtos', convertData);
  
     
    
    const [specificClient, setSpecificClient] = useState();  
    const [newClient, setNewClient] = useState(false);
    const [newClientInclude, setNewClientInclude] = useState(null);

    const getData = () => {
        let retrieved = JSON.parse(localStorage.getItem('produtos'));
        
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
        localStorage.setItem('produtos', convertData);
        
        
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

    const handleNewProduct = () => {
        
        setNewClient(true);
    }

    const handleSaved = (clientToSave) => {
        setNewClientInclude(clientToSave);  
        let dataIncludes = getData();
        dataIncludes.push(newClientInclude);
        let convertData = JSON.stringify(dataIncludes);
        localStorage.setItem('produtos', convertData);



        let included = false;

        client.forEach(element => {
            if(element.id === clientToSave.id) {
                included = true;                
            }
        });

     

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

    

    useEffect(() => {
        let dataIncludes = getData();
        dataIncludes.push(newClientInclude);
        let convertData = JSON.stringify(dataIncludes);
        localStorage.setItem('produtos', convertData);
        
    }, [handleSaved, getData]);

    useEffect(() => {
        
    },[client]);

    return (
        <>            
            <div className="clients-edit">
                <button className="newItem" onClick={handleNewProduct}>Adicionar novo produto</button>
                <SaveEditProduct sclient={specificClient} nclient={newClient} saveFunction={handleSaved} />
                {client !== null &&
                <table>
                    <caption>Produtos cadastrados</caption>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Produto</th>
                            <th>Marca</th>
                            <th>Quantidade</th>
                            <th colSpan="2">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.map(({id, image, product, brand, quantity}) => {
                            
                            return(
                                <tr key={id}>
                                    <td><img src={image} alt="Imagem do produto" /></td>
                                    <td>{product}</td>
                                    <td>{brand}</td>
                                    <td>{quantity}</td>
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

export default EditProducts;
import React, { useEffect, useState } from 'react';
import crypto from 'crypto';

const SaveEditProduct = ({ sclient, nclient, list, saveFunction }) => {
 
    const [editClient, setEditClient] = useState();
    const [status, setStatus] = useState(false);
    const [newClient, setNewClient] = useState(null);

    const [productId, setproductId] = useState('');
    const [productName, setproductName] = useState('');
    const [productImage, setproductImage] = useState('');
    const [productQuantity, setproductQuantity] = useState('');
    const [productBrand, setproductBrand] = useState('');

    useEffect(() => {
        if(sclient) {     
            setEditClient(sclient);
            setproductId(sclient.id);       
            setproductName(sclient.image);
            setproductImage(sclient.product);
            setproductQuantity(sclient.quantity);
            setproductBrand(sclient.brand);
        }

        if(nclient) {
            setStatus(true);                   
        }
    }, [sclient, nclient, list]);


    const handleSave = (id) => {
     
   
        if(id === 0) {          

            const newCLI = {
                id: crypto.randomBytes(20).toString('hex'),
                image: productName,
                product: productImage,
                quantity: productQuantity,
                brand: productBrand,
            };
            setNewClient(newCLI);
            saveFunction(newClient);
            return newCLI;            
        }

    }

    useEffect(() => {
        if(handleSave !== null) {

            
        }
        
    }, [handleSave]);

    
    return (
        <div>
            {editClient &&
                <div className="save-element">
                    <h3>Editar</h3>
                    <input type="text" name="image" id="image" placeholder="URL da imagem Base64" value={productName} onChange={t => setproductName(t.target.value)}/>
                    <input type="text" name="product" id="product" placeholder="Produto" value={productImage} onChange={t => setproductImage(t.target.value)} />
                    <input type="text" name="brand" id="brand" placeholder="Marca" value={productBrand} onChange={t => setproductBrand(t.target.value)} />
                    <input type="text" name="quantity" id="quantity" placeholder="Quantidade" value={productQuantity} onChange={t => setproductQuantity(t.target.value)} />
                    <button onClick={
                        () => {
                            const newCLI = {
                                id: productId,
                                image: productName,
                                product: productImage,
                                quantity: productQuantity,
                                brand: productBrand,
                            };
                            return saveFunction(newCLI);
                        }
                    }>Salvar</button>
                </div>
            }

            {editClient === undefined && status ?
                <div className="save-element">
                    <h3>Novo</h3>
                    <input type="text" name="image" id="image" placeholder="URL da imagem Base64" value={productName} onChange={t => setproductName(t.target.value)}/>
                    <input type="text" name="product" id="product" placeholder="Produto" value={productImage} onChange={t => setproductImage(t.target.value)} />
                    <input type="text" name="brand" id="brand" placeholder="Marca" value={productBrand} onChange={t => setproductBrand(t.target.value)} />
                    <input type="text" name="quantity" id="quantity" placeholder="Quantidade" value={productQuantity} onChange={t => setproductQuantity(t.target.value)} />
                    <button onClick={
                        () => {
                            const newCLI = {
                                id: crypto.randomBytes(20).toString('hex'),
                                image: productName,
                                product: productImage,
                                quantity: productQuantity,
                                brand: productBrand,
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

export default SaveEditProduct;
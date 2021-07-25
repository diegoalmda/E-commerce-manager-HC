import React from 'react';
import EditClients from '../components/clients/EditClients';

const Clients = () => {
    return (
        <div className="container-clients">
            <h1>Gerenciar Clientes</h1>
            <EditClients />
        </div>
    );
};

export default Clients;
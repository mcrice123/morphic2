import React from 'react';

export default () => {
    return (
    <div style={{
        height: '100%',
        width: '100%',
        margin: 'auto 0',
    }}>
        <div
            id={"first-bar"}
             style={{
                 width: '100%',
                 height: '4px',
                 backgroundColor: '#fff',
                 marginBottom: '8px',
                 borderRadius: '10px',
                 marginTop: '4px',
             }}
        />
        <div
            id={"second-bar"}
            style={{
                width: '100%',
                height: '4px',
                backgroundColor: '#fff',
                marginBottom: '8px',
                borderRadius: '10px',
            }}
        />
        <div
            id={"third-bar"}
            style={{
                width: '100%',
                height: '4px',
                backgroundColor: '#fff',
                borderRadius: '10px',
            }}
        />
    </div>
    );
};
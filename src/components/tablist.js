import React from 'react';

require('./styles/tablist.css');

/* Component for displaying styled tabs given a list of objects (items) containing the following:
    1. value (string)
    2. label (string)
    3. onClick (function)
*/
export default ({ items }) => {
    return (
        <div className={"tab-list"}>
        {
            items.map(item => {
                return (
                    <div
                        className={"tab-item"}
                        key={item.value}
                        onClick={() => item.onClick(item.value)}
                    >
                        {item.label}
                    </div>
                );
            })
        }
        </div>
    );
}
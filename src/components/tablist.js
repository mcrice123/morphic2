import React from 'react';

require('./styles/tablist.scss');

/* Component for displaying styled tabs given a list of objects (items) containing the following:
    1. value (string)
    2. label (string)
    3. onClick (function)
    4. selected (boolean)
*/
export default ({ items }) => {
    return (
        <div className={"tab-list"}>
        {
            items.map(item => {
                return (
                    <button
                        className={`highlight-btn tab${item.selected ? " selected" : ""}`}
                        key={item.value}
                        onClick={() => item.onClick(item.value)}
                        onKeyDown={() => item.onClick(item.value)}
                    >
                        {item.label}
                    </button>
                );
            })
        }
        </div>
    );
}
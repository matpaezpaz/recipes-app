import React from 'react'

const ChefCard = (props) => {
    const {
        full_name
    } = props;
    return (
        <div>
            {full_name}
        </div>
    )
}

export default ChefCard;

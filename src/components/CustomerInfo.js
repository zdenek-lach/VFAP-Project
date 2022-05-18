import React from 'react';

const CustomerInfo = ({item}) => {


    return (
        <div className='card'>
            {item.customer.map(customer => (
                <ul>
                    <li>
                        <strong>Customer ID: </strong>{customer.id}
                    </li>
                    <li>
                        <strong>Customer Firstname: </strong>{customer.firstname}
                    </li>
                    <li>
                        <strong>Customer Surname: </strong>{customer.surname}
                    </li>
                    <li>
                        <strong>Customer PhoneNumber: </strong>{customer.phone_number}
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default CustomerInfo;

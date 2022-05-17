import React from 'react';

const CustomerInfo = ({ item }) => {
    console.log(item.customer.id)
    return (
                <div className='card-back'>
                    <ul>
                        <li>
                            <strong>id:</strong> {item.customer.id}
                        </li>
                        <li>
                            <strong>computer:</strong> {item.customer.firstname}
                        </li>
                        <li>
                            <strong>customer:</strong> {item.customer.surname}
                        </li>
                        <li>
                            <strong>time:</strong> {item.customer.phone_number}
                        </li>
                    </ul>
                </div>

    );
};

export default CustomerInfo;

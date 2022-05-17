import React from 'react';
import Spinner from "../BreakingBadTutorial/ui/Spinner";
import CustomerInfo from "./CustomerInfo";

const Reservation = ( { items , isLoading } ) => {
    return isLoading ? (<Spinner/>) : (<section className="cards">
        {items.map(item => (
            <CustomerInfo key={item.id} item={item}/>
        ))}
    </section>);
};

export default Reservation;

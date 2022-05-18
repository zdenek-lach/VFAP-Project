import React from 'react';
import Spinner from "../BreakingBadTutorial/ui/Spinner";
import CustomerInfo from "./CustomerInfo";
import ComputerInfo from "./ComputerInfo";

const Reservation = ({reservations, isLoading}) => {
    return isLoading ? (<Spinner/>) : (
        <section className="cards">
            {reservations.map(item => (
                    <CustomerInfo key={item.id} item={item}/>
                )
            )
            }{reservations.map(item => (
                <ComputerInfo key={item.id * 10} item={item}/>
            )
        )
        }
        </section>);
};

export default Reservation;

import React from "react";
import Pay from "./Pay";


function PayWrapper(){
    const [buttonClicked, setButtonClicked] = React.useState(false);

    if (buttonClicked) {
        //return <Navigate to={"/pay"}/
        const customer = {
            name: "My Name",
            id: "1234aAbB1234",
            email: "unknownemail@gmail.com",
            amount: 20 * 100
        }

        return (
            <div>
                <Pay>{customer}</Pay>
            </div>
        );
    }

    return(
        <div>
            <h2>This is a temporary payment button</h2>
            <h2>Click the button to go to payment page</h2>

            <form onSubmit={handleSubmit}>
                <button type="">Click here</button>
            </form>
        </div>
    );

    function handleSubmit() {
        console.log('You clicked');
        setButtonClicked(true);
    }

}



export default PayWrapper;
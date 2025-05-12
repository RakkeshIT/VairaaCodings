import Customer from "./Customer"

const Car = ({C1, C2, C3, C4}) => {
    const List = ["Rajesh", "Arun", "Akalya", "Abinaya", "Ram Kumar", "Arthi", "Aravind"]
    return(
        <>
            <h1>My Car List.</h1>
            <ul>
                <li>{C1}</li>
                <li>{C2}</li>
                <li>{C3}</li>
                <li>{C4}</li>
            </ul>

            <Customer List = {List}/>
        </>
    )
}

export default Car
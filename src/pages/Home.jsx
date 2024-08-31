import axios from "axios";
import { useEffect, useState } from "react";
import NavComponent from "../components/navbar";
import RentalItem from "../components/RentalItem";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"

function Home() {
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        async function fetchData() {
            let responseItemList = [];
            await axios.get("http://localhost:8080/rentalItem/getAllRentalItems")
                .then(resp => resp.data.map(
                    item => (
                        responseItemList.push({ title: item.book.title, author: item.book.author, rate: item.rentalRate, availableItems: item.availableItems, itemId: item.itemId })
                    )
                ))
            setItemList(responseItemList)
        }
        fetchData();
    }, [])


    return (
        <div className="container">
            <div className="row">
                <NavComponent />
            </div>
            <div className="row">
                <Sidebar className="col" />
                <div className="col">
                    {itemList.map(book => (<RentalItem key={book.itemId} author={book.author} title={book.title} rate={book.rate} availableItems={book.availableItems} />))}
                </div>
            </div>
        </div>
    )
}
export default Home
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap"
import NavComponent from "../components/navbar";
import Sidebar from "../components/Sidebar";

function RentalItemForm() {
    const [bookList, setBookList] = useState([]);
    const [rentalItem, setRentalItem] = useState({
        itemId: "",
        rentalRate: 0.0,
        availableItems: 0,
        book: {
            isbnNumber: "",
            title: "",
            author: ""
        }
    });


    const handleInputChanges = (event) => {
        let name = event.target.name;
        let value = null;
        console.log(event.target.name)
        if (name === "book") {
            console.log(event.target.value)
            value = bookList.filter(book =>  book.isbnNumber === event.target.value )
            console.log(value)
        } else {
            value = event.target.value;
        }

        setRentalItem(values => ({ ...values, [name]: value }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(rentalItem)
    }

    useEffect(
        () => {
            async function fetchBookData() {
                let responseBookList = []
                await axios.get("http://localhost:8080/book/getAllBooks")
                    .then(resp => {
                        resp.data.map(book => {
                            responseBookList.push({ "isbnNumber": book.isbnNumber, "title": book.title, "author": book.author })
                        })
                    })
                setBookList(responseBookList)
            }
            fetchBookData()
        }
        , [])
    return (
        <div className="container">
            <div className="row">
                <NavComponent />
            </div>
            <div className="row">
                <Sidebar className="col" />
                <Form className="container col form-container" onSubmit={handleFormSubmit}>
                    <FormGroup>
                        <FormLabel>Item ID:</FormLabel>
                        <FormControl type="text" name="itemId" value={rentalItem.itemId} onChange={handleInputChanges} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Rental rate:</FormLabel>
                        <FormControl type="text" name="rentalRate" value={rentalItem.rentalRate} onChange={handleInputChanges} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Available items:</FormLabel>
                        <FormControl type="text" name="availableItems" value={rentalItem.availableItems} onChange={handleInputChanges} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Select a book:</FormLabel>
                        <FormSelect name="book" value={rentalItem.book.isbnNumber} onChange={handleInputChanges}>
                            {
                                bookList.map(book => {
                                    return (<option key={book.isbnNumber} value={book.isbnNumber}>{book.title}</option>)
                                }
                                )
                            }
                        </FormSelect>
                    </FormGroup>
                    <Button type="submit">{"Submit"}</Button>
                </Form>
            </div>
        </div>
    )
}

export default RentalItemForm
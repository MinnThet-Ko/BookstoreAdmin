import { Button, Form, FormControl, FormGroup, FormLabel, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/BookFormStyles.css"
import Sidebar from "../components/Sidebar"
import NavComponent from "../components/navbar"
import { useState } from "react"
import axios from "axios"

function BookForm() {

    const [book, setBook] = useState({
        title: "",
        author: "",
        isbnNumber: ""
    })

    const handleInputChanges = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setBook(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book);
        let formData = new FormData();
        formData.append("isbnNumber", book.isbnNumber);
        formData.append("author", book.author);
        formData.append("title", book.title);
        axios({
            method: "post",
            url: "http://localhost:8080/book/saveBook",
            data: book,
            headers: { "Content-Type": "application/json" },
        }).then(console.log("The post method is a success")
        )

    }
    return (
        <div className="container">
            <div className="row">
                <NavComponent />
            </div>
            <div className="row">
                <Sidebar className="col" />
                <Form className="container col form-container" onSubmit={handleSubmit}>
                    <FormGroup className="row my-3">
                        <FormLabel className="col">
                            Enter ISBN number:
                        </FormLabel>
                        <FormControl type="text" name="isbnNumber" value={book.isbnNumber} onChange={handleInputChanges} className="col" />
                    </FormGroup>
                    <FormGroup className="row my-3">
                        <FormLabel className="col">
                            Enter title:
                        </FormLabel>
                        <FormControl type="text" name="title" value={book.title} onChange={handleInputChanges} className="col" />
                    </FormGroup>
                    <FormGroup className="row my-3">
                        <FormLabel className="col">
                            Enter author:
                        </FormLabel>
                        <FormControl type="text" name="author" value={book.author} onChange={handleInputChanges} className="col" />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}
export default BookForm
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import BookForm from "../pages/BookForm";
import RentalItemForm from "../pages/RentalItemForm";

function BookstoreRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/book/entry' element={<BookForm />} />
                <Route path="/rentalItem/entry" element={<RentalItemForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default BookstoreRouter;
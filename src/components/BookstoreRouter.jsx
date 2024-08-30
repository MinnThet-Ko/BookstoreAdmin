import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import BookForm from "../pages/BookForm";

function BookstoreRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/book/entry' element={<BookForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BookstoreRouter;
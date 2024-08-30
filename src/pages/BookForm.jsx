import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

function BookForm(){
    return(
        <Form>
            <FormGroup>
                <FormLabel>
                    Enter ISBN number:
                </FormLabel>
                <FormControl type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>
                    Enter title:
                </FormLabel>
                <FormControl type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>
                    Enter author:
                </FormLabel>
                <FormControl type="text"/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default BookForm
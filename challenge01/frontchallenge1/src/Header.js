import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Attendance System</Navbar.Brand>
                    <Nav className="me-auto navbar_warapper">
                        <Link to="/register">Add Employee</Link>
                        <Link to="/attandancemark">Mark Attendance</Link>
                        <Link to="/attendancetable">Attendance</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header
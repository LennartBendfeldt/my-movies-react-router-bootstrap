import { Switch, Route, Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar>
            <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link} to="/" >Home</Nav.Link>
                </NavItem>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </div>
    );
  }
}
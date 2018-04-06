import './Searchbar.css'
import React from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';

class Searchbar extends React.Component {
    render() {
        return (
            <div className="searchbar-form">
                <Form inline>
                    <Input type="textarea" id="searchbar-searchbox" placeholder="Search.." onChange={this.props.updateSearchType}></Input>
                    <Button size="lg" className="btn searchbar-submit" onClick={this.props.search} >{this.props.searchType}</Button>
                </Form>
            </div>
        );
    }
}

export default Searchbar;
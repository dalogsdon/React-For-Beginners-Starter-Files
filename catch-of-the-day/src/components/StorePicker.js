import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault();
        // first, get text from the input box
        const storeId = this.storeInput.value;
        console.log(storeId);
        // second, transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type='text' required placeholder="Store Name"
                    ref={(input) => { this.storeInput = input }}
                    defaultValue={getFunName()}/>
                <button type='submit'>Visit Store →</button>
            </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
};

export default StorePicker;

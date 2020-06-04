import React from 'react';
import Weeks from './Weeks';

const Content = props => {
    return (
        <div className="ui content">
            {props.content.display === 'weeks' ? <Weeks content={props.content}/> : 'Please click on one of the links above to display some content'}
        </div>
    )
}

export default Content;


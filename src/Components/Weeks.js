import React from 'react';

const Weeks = props => {
    return (
        <div className="ui items weeks-display">
        {props.content.loot.map((el) => {
            return (
                <div className="ui five column grid">
                    <div className="row">
                        <div className="first-col column"><p className="ui grey inverted large header">Week {el.week}</p></div>
                        <div className="column"><p className="ui grey inverted tiny header">{el.first.fight}</p></div>
                        <div className="column"><p className="ui grey inverted tiny header">{el.second.fight}</p></div>
                        <div className="column"><p className="ui grey inverted tiny header">{el.third.fight}</p></div>
                        <div className="column"><p className="ui grey inverted tiny header">{el.fourth.fight}</p></div>
                    </div>
                </div> 
            )
        })}
        </div>
    )
}

export default Weeks;
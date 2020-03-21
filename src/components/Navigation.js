import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="charApp">
                <div>
                    <a href="">Characters</a>
                    <Link to="/characterlist">Characters</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
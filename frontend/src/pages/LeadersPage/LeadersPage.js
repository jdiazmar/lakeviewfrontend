import React from 'react';
import LeaderImage from '../../components/LeaderImage/LeaderImage';
import QImage from '../../components/QImage/QImage';

const LeadersPage = () => {
    return ( 
        <div className='container' >
            <div className='row' >
                <div className='container-home' >
                    <h3 className='welcome'>Meet the Youth Pastors!</h3>
                    <div class='col' >
                        <QImage />
                        <p className='welcome' >Email: pastorq@lakeviewindy.com</p>
                        <p className='welcome' >Phone: 317-243-9396</p>
                    </div>
                    <div class='col' >
                        <LeaderImage />
                        <p className='welcome' >Email: mattiew@lakeviewindy.com</p>
                        <p className='welcome' >Phone: 317-243-9396</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LeadersPage;
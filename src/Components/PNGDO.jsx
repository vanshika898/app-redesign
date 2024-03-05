import React from 'react';
import hseStyles from './CNGDO.module.css';

export default function PNGDO() {
    return (
    
        <div style={{fontFamily:"times new roman"}}>
             <h4 style={{textAlign:'right',color:"#4981e2"}}> Home/safty/PNG Do and Don'ts</h4>
            <h1 style={{textAlign:'center',marginTop:'3%',color:"#4981e2"}}>PNG Do and Don'ts </h1>
          
            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>1. Don't use LPG cylinder in PNG burner use  only the stoves converted to run on PNG</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>2. After cooking make a practice to close the appliance valve</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>3. Before igniting the cooking appliances ensure that there is no gas smell</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>4. Close the meter control valve (MCV) close the appliance valve</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>5. Do not start  any vehicle in your premises</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>6. Do not operate mobile phone inside house</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>7. Do not ignite hot plate or any other items</h4>
            </div>
        </div>
    );
}

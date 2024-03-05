import React from 'react';
import hseStyles from './CNGDO.module.css';

export default function CNGDO() {
    return (
    
        <div style={{fontFamily:"times new roman"}}>
             <h4 style={{textAlign:'right',color:"#4981e2"}}> Home/safty/CNG Do and Don'ts</h4>
            <h1 style={{textAlign:'center',marginTop:'3%',color:"#4981e2"}}>CNG Do and Don'ts </h1>
          
            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>1. Do not use any naked flame near CNG flame area</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>2. Always ensure that installing/servicing the CNG kit is done through an authorized workshop</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>3. Smoking and spitting are prohibited in the CNG station area</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>4. Please help us to keep the CNG station area clean</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>5. Be alert for any emergency</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>6. Do not start the vehicle filling is under Progress</h4>
            </div>

            <div className={`container mt-4 ${hseStyles.border} ${hseStyles.padding}`}>
                <h4 className={`text-primary font-weight-bold ${hseStyles.text}`}>7. Always keep the certificate of the CNG kit and cylinder</h4>
            </div>
        </div>
    );
}

import React from 'react';
import propTypes from 'prop-types';
const Profil = ({ children,fullName="undefined", bio="undefined", profession="Student",handleName}) => {
    return (
        <div style={{ textAlign: "center", border: "1px solid black", backgroundColor: "lightcoral" }}>
         
             <div><span><strong>Name:</strong>{fullName}</span> </div>
             <div><span><strong>Bio:</strong>{bio}</span> </div>
             <div><span><strong>Profession:</strong>{profession}</span> </div>
         {children}
         <button onClick={(e)=>handleName(e,fullName)}>click me</button>
        </div>


    );


};
Profil.propTypes={
fullName:propTypes.string,
bio:propTypes.string,
profession:propTypes.string,
handleName:propTypes.func
};

export default Profil;
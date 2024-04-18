import React from "react";
import '../Home.css';

export default function Home(){
    return(
        <div>
           <div className="acceuil">
                <div className="right">
                    <h1>Bienvenu!</h1> <br/>
                    <h1>Si vous avez des probleme de maintenance ou que ca soit <br/> Vous etes au bon endroit</h1>
                </div>
                <div className="left">
                    <img src="https://img.freepik.com/vecteurs-libre/illustration-sql-design-plat-dessine-main_23-2149242071.jpg?t=st=1713383879~exp=1713387479~hmac=63189d958efb06cac7e909aaaa352e4ecf2c637ec605d4aa29ebe0bb2443df90&w=740" />
                </div>
           </div>
        </div>
    )
}
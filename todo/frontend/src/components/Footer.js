import React from "react";


const Footer = () => {
    return (
        <footer class='footer'>
            <div className="copyright">
                <div className="pull-left" style={{textAlign: "center"}}>

                    {"Copyright ©" + ' ' + new Date().getFullYear()+ " Todo-app command. All rights reserved."}

                </div>
                {/*<div className="pull-right">Todo-app command</div>*/}
            </div>
        </footer>
    )
}

export default Footer
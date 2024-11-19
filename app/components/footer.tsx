import { Heading_3 } from "./Heading";
 
export const Footer = () => {
    return(
        <footer className="footer text-center">
            <ul className="flex justify-center items-center gap-5">
                <li className="text-4xl text-[#21243D]"><i className="fa fa-facebook-square" /></li>
                <li className="text-4xl text-[#21243D]"><i className="fa fa-instagram" /></li>
                <li className="text-4xl text-[#21243D]"><i className="fa fa-twitter" /></li>
                <li className="text-4xl text-[#21243D]"><i className="fa fa-linkedin-square" /></li>
            </ul>
            <div>
                <Heading_3 name="Copyright ©2024 All rights reserved  "/>
            </div>
        </footer>
    );
}
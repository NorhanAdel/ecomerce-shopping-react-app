import React from "react";
import { BiCheck } from "react-icons/bi";
import Table from "react-bootstrap/Table";
import { Like } from "../../Component/Index";
import "./Description.scss";
export const Descriotion = () => {
  return (
    <div className="_descriptions">
      <div className="descriptions_container ">
        <div className="_descriptions_details">
          <ul>
            <li className="active">Description</li>
            <li>Review</li>
            <li>Shipping</li>
            <li>About Seller</li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            molestias minima iste laboriosam eligendi voluptates mollitia alias,
            sequi tempore est officiis! Nam minus ab commodi suscipit ad,
            blanditiis harum numquam Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur aliquam error nesciunt ratione magni
            inventore aspernatur aut ea sint, voluptate ullam libero quas
            voluptas nobis ut atque vitae omnis necessitatibus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Omnis voluptates
            dolorum velit nostrum exercitationem, incidunt quaerat accusantium
            facilis consequuntur aut hic debitis odio perspiciatis autem magni
            quae neque esse eaque.
          </p>

          <Table striped="columns">
            <tbody>
              <tr>
                <td>Model</td>
                <td>#8786867</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>Classic style</td>
              </tr>
            </tbody>
          </Table>

          <ul className="des-list">
            {
              [1, 2, 3, 4].map(() => {
                return (
                  <li>
                    {" "}
                    <BiCheck /> Some great feature name her
                  </li>
                );
              })
          }
        
          
         </ul>
        </div>
      </div>
       
        <Like />
    
    </div>
  );
};

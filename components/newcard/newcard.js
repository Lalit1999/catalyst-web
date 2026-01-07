import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { contact } from '@images';


const NewCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image">
       <Image
         src={contact}
         alt="Contact"
         fill
         style={{ objectFit: "cover" }}
         priority
         />
         </div>

        <div className="content">
          <a href="#">
            <span className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </a>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium 
          </p>
         <button className="action" type="button">
            Contact Us
            <span aria-hidden="true">→</span>
         </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    height:100%;
    min-height:70vh;
    width:100%;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
  }

  .card a {
    text-decoration: none;
  }

  .content {
    margin-top:1rem;
    padding: 1.1rem;

  }

.image {
  position: relative;
  width: 100%;
  height: 15em;
  overflow: hidden;
}

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .action {
    width: 100%;
    display: inline-flex;
    align-items:center;
    justify-content: center;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: orangered;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: .3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }`;

export default NewCard;

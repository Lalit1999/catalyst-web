import React from 'react';
import styled from 'styled-components';

const NewFormCard = () => {
  return (
    <StyledWrapper>
      <form className="colorful-form">
     <div className="form-row">
  <div className="form-group">
    <label className="form-label">Name: *</label>
    <input className="form-input" type="text" placeholder="Enter your name" />
  </div>

  <div className="form-group">
    <label className="form-label">Mobile: *</label>
    <input className="form-input" type="number" placeholder="Enter your mobile number" />
  </div>
</div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:*</label>
          <input required placeholder="Enter your email" className="form-input" name="email" id="email" type="email" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">Message:*</label>
          <textarea required placeholder="How may i help you?" className="form-input" name="message" id="message" defaultValue={""} />
        </div>
        <button className="form-button" type="submit">Send Message</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .colorful-form {
    width:100%;
    margin: 0 auto;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
    @media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
  @media (max-width: 640px) {
  .colorful-form {
    padding: 1rem;
  }
}


  .form-group {
    margin-bottom: 20px;
    

  }

  .form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: black;
  }

  .form-input {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f5f3f4;
    color: white;
    border-radius: 5px;
  }

  textarea.form-input {
    height: 100px;
  }

  .form-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: orangered;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form-button:hover {
    background-color: #ff5f59;
  }`;

export default NewFormCard;

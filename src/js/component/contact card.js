import React from "react";

export const ContactCard = () => {
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://images.pexels.com/photos/2308882/pexels-photo-2308882.jpeg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> Maria Ortega </h5>
            <li>
              <i class="bi bi-geo-alt card-text"> 1234 street </i>
              <i class="bi bi-telephone card-text"> 123-456-789</i>
              <i class="card-text bi bi-envelope-fill"> email@example.com</i>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

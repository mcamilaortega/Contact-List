import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { Contacts } from "./views/Contacts";
import { AddContacts } from "./views/AddContact";

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.pexels.com/photo/woman-smiling-holding-camera-2308882/" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> Maria Ortega </h5>
        <li>
        <i class="bi bi-geo-alt card-text"> 1234 street </i>
        <i class="bi bi-telephone card-text"> 123-456-789</i> 
        <i class="card-text bi bi-envelope-fill" > email@example.com</i>
        </li>
      </div>
    </div>
  </div>
</div>
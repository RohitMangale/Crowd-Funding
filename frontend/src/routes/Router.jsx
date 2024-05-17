import React from "react";
import { Route, Routes} from "react-router-dom";
import Faq from "../pages/Faq.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Login from "../pages/users/Login.jsx";
import Register from "../pages/users/Register.jsx";
import Home from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import AuthRoutes from "./AuthRoutes.jsx";
import GuestRoutes from "./GuestRoutes.jsx";
import Values from "../pages/Values.jsx";
import Internship from "../components/Internship/Internship.jsx";
import Internship_Main from "../components/Internship_Main/Internship_Main.jsx";
import Internship_details from "../components/Internship_details/Internship_details.jsx";
import CampaignsPage from "../pages/Campaigns.jsx";
import CamCreation from "../components/forms/CamCreation.jsx";
import CreateInternship from "../components/forms/CreateInternship.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import MyAccount from "../pages/user-account/MyAccount.jsx";
import InvestorDB from "../pages/dashboard/InvestorDB.jsx";
import CampaignDetails from "../pages/CampaignDetails.jsx";
import InternDB from "../pages/internDashbord/InternDB.jsx";
import FundingCampaign from "../components/forms/FundingCampaign.jsx";
import UpdateCam from "../components/forms/UpdateCam.jsx";
import CampaginDetailsDB from "../pages/CampaginDetailsDB.jsx";
import ApplyInternship from "../components/forms/ApplyInternship.jsx";

const Router = () => {


  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="campaignsPage" element={<CampaignsPage />} />
      <Route path="/internshipPage" element={<Internship />} />
      <Route path="/internMain" element={<Internship_Main />} />
      <Route path="/internshipDetails/:id" element={<Internship_details />} />
      <Route path="campaignDetails/:id" element={<CampaignDetails />} />
      <Route path="campaignDetailsDB/:id" element={<CampaginDetailsDB />} />

      <Route path="values" element={<Values />} />
      <Route path="fundingCampaign/:id" element={<FundingCampaign />} />
      <Route path="internships/:id" element={<ApplyInternship />} />

        <Route path="createCampaign" element={<CamCreation />} />
        <Route path="updateCampaign/:id" element={<UpdateCam />} />
        <Route path="CreateInternship" element={<CreateInternship />} />
        <Route path="fundraisers/profile/me"element={ <MyAccount />} />
        <Route path="investors/profile/me"element={ <InvestorDB />} />
        <Route path="interns/profile/me"element={ <InternDB />} />


        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Router;

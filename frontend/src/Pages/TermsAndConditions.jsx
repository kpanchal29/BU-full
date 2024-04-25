import React from "react";
import Header from "../containers/Header";
import Home from "../containers/Home";
import Footer from "../containers/Footer";
import FooterBotton from "../containers/FooterBotton";

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <Home title="Terms and Conditions" />
      <div>
        <section className=" bg-magic2 rounded-lg w-screen  px-3 py-28 sm:px-24">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold">Introduction</p>
              <div>
                <p>
                  At Bea you, accessible from{" "}
                  <strong>https://www.beayou.thespecialcharacter.com</strong>,
                  one of our main priorities is the privacy of our visitors.
                  This Privacy Policy document contains types of information
                  that is collected and recorded by
                  https://beayou.thespecialcharacter.com and how we use it. If
                  you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us. This
                  Privacy Policy applies only to our online activities and is
                  valid for visitors to our website with regards to the
                  information that they shared and/or collect in
                  https://beayou.thespecialcharacter.com. This policy is not
                  applicable to any information collected offline or via
                  channels other than this website.
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Consent</p>
              <div>
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Information we collect</p>
              <div>
                <p>
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information. If you contact us directly, we may receive
                  additional information about you such as your name, email
                  address, phone number, the contents of the message and/or
                  attachments you may send us, and any other information you may
                  choose to provide.
                </p>
                <p>
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">
                How we use your information
              </p>
              <div>
                <p>
                  We use the information we collect in various ways, including
                  to:
                </p>
                <p>Provide, operate, and maintain our website.</p>
                <p>Improve, personalize, and expand our website.</p>
                <p>Understand and analyze how you use our website.</p>
                <p>
                  Develop new products, services, features, and functionality.
                </p>
                <p>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposesCommunicate with you, either
                  directly or through one of our partners, including for
                  customer service, to provide you with updates and other
                  information relating to the website, and for marketing and
                  promotional purposes.
                </p>
                <p>Send you emails.</p>
                <p>Find and prevent fraud.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FooterBotton />
    </div>
  );
};

export default TermsAndConditions;

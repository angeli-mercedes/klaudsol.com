import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | KlaudSol - Premium Shopify E-commerce Apps</title>
        <meta name="viewport"       content="width=device-width, initial-scale=1.0" />
      </Head>
      <>
        {/* Navigation area starts */}
        <div className="menu-area">
          <div className="container">
            <div className="row">
              {/* Navigation starts */}
              <div className="col-md-12">
                <div className="mainmenu">
                  <div className="navbar navbar-nobg">
                    <div className="navbar-header">
                      <a className="navbar-brand" href>
                        <img
                          src="assets/img/logo-180x180.png"
                          alt
                          style={{ position: "relative", top: 5 }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Navigation ends */}
            </div>
          </div>
        </div>
        {/* Navigation area ends */}
        {/* About us area starts */}
        <section id="aboutus" className="aboutus-area section-small">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6">
                <div className="about-content">
                  <h2>Privacy Policy</h2>
                  <p>
                    This Privacy Policy describes how personal information is
                    collected, used, and shared when you install or use any of the
                    Apps developed by KlaudSol in connection with your
                    Shopify-supported store.
                  </p>
                  <h3>Personal Information the App Collects</h3>
                  <p>
                    When you install any of our Apps, we are automatically able to
                    access certain types of information from your Shopify account:
                  </p>
                  <ul>
                    <li>
                      The <strong>domain</strong> and{" "}
                      <strong>*.myshopify domain</strong> of your online store.
                    </li>
                  </ul>
                  <p />
                  <p>
                    We collect personal information directly from the relevant
                    individual, or through your Shopify account.
                  </p>
                  <h3>How Do We Use Your Personal Information?</h3>
                  <p>
                    We use the personal information we collect from you and your
                    customers in order to provide the Service and to operate the App.
                  </p>
                  <h3>Sharing Your Personal Information</h3>
                  <p>
                    By default, we never share your personal information to any
                    third-parties outside KlaudSol Philippines, Inc. However, we may
                    share your Personal Information to comply with applicable laws and
                    regulations, to respond to a subpoena, search warrant or other
                    lawful request for information we receive, or to otherwise protect
                    our rights.
                  </p>
                  <p>
                    If you are a European resident, you have the right to access
                    personal information we hold about you and to ask that your
                    personal information be corrected, updated, or deleted. If you
                    would like to exercise this right, please contact us through the
                    contact information below.
                  </p>
                  <p>
                    Additionally, if you are a European resident we note that we are
                    processing your information in order to fulfill contracts we might
                    have with you (for example if you make an order through the Site),
                    or otherwise to pursue our legitimate business interests listed
                    above. Additionally, please note that your information will be
                    transferred outside of Europe, including to Canada and the United
                    States.
                  </p>
                  <h3>Data Retention</h3>
                  <p>
                    When you install the App, we will maintain your data unless and
                    until you uninstall the App and/or ask us to delete this
                    information. Note that removing such data will render the App
                    unusable.
                  </p>
                  <h3>Changes</h3>
                  <p>
                    We may update this privacy policy from time to time in order to
                    reflect, for example, changes to our practices or for other
                    operational, legal or regulatory reasons.
                  </p>
                  <h3>Contact Us</h3>
                  <p>
                    For more information about our privacy practices, if you have
                    questions, or if you would like to make a complaint, please
                    contact us by e-mail at{" "}
                    <strong>
                      <a href="mailto:support@klaudsol.com">support@klaudsol.com</a>
                    </strong>{" "}
                    or by mail using the details provided below:
                  </p>
                  <p>
                    <strong>
                      Unit 10A, 5th Ave. cor. 26th Street, <br />
                      E-Square Crescent Park West, Bonifacio Global City, <br />
                      Taguig City, Metro Manila 1634 <br />
                      Philippines <br />
                    </strong>
                  </p>
                </div>
                {/*
                    <div class="about-boxs">
      
                        <div class="about-box">
                            <span class="ti-briefcase"></span>
                            <h3>289</h3>
                            <p>Job Completed</p>
                        </div>
      
                        <div class="about-box">
                            <span class="ti-pencil-alt"></span>
                            <h3>163</h3>
                            <p>Ongoing Jobs</p>
                        </div>
      
                        <div class="about-box">
                            <span class="ti-cup"></span>
                            <h3>023</h3>
                            <p>Achivements</p>
                        </div>
      
                    </div>
                    */}
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="about-img">
                  <img src="assets/img/about/about.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About us area ends */}
      </>
    </>
  );
  
};
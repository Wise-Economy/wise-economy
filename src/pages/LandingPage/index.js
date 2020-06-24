import React from "react";

import { app } from "../../firebase";

import "./LandingPage.css";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <div className="container-lg">
        <div className="row justify-content-start align-items-center py-5">
          <div className="col-md col-lg-8 py-5">
            <h1 className="display-3 font-weight-bold">
              Untangling personal finances for global citizens
            </h1>
            <p className="text-muted">
              Manage all your Indian and German bank accounts in a single app.
              Instant remittance of money to India using the best rates in the
              market without any hidden charges and fees. Use your credit
              history in both countries to avail hassle-free, low-interest loans
              from the banks of your choice.
            </p>
            <Form />
          </div>
          <div className="col-md col-lg-4">
            <img
              className="img-fluid  mx-auto d-block"
              src="https://assets.revolut.com/media/business/landing/iphone.png"
            />
          </div>
        </div>
      </div>
      <div className="container-lg">
        {/* First Start*/}
        <div className="row align-items-center">
          <div className="col-md">
            <h3>Manage all your bank accounts</h3>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Managing bank accounts in two countries is not an easy job and the
              pain is real. We give you an aggregated view of all your accounts
              and a peace of mind.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Check on the up-to-date bank balances, all your transactions in
              both countries.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Take advantage of our categorization of your expenses to set
              budgets and get analytics driven insights about your expenditure,
              loan-payments, credit card billing etc.
            </p>
          </div>
          <div className="col-md">
            <img
              className="img-fluid"
              src="https://assets.revolut.com/media/business/landing/features/feature-1.svg"
            />
          </div>
        </div>
        {/* First End*/}
        {/*Second Row Start*/}
        <div className="row align-items-center">
          <div className="col-md">
            <img
              className="img-fluid"
              src="https://assets.revolut.com/media/payments/payments-internationsl.svg"
            />
          </div>
          <div className="col-md order-first order-md-last">
            <h3>Instant remittance to any bank account in India</h3>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>
              Remit money using the same app. Initiate the transaction directly
              from your German bank account without any charges.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              We offer the best rates in the market. We don’t charge you hefty
              fees when you send your money to India.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Money sent from your account will be credited to the Indian
              beneficiary in less than an hour. Get notified in the app when the
              transaction is completed.
            </p>
          </div>
        </div>
        {/*Second Row End*/}
        {/* Third Row Start*/}
        <div className="row align-items-center">
          <div className="col-md">
            <h3>
              Use your credit history in both countries to avail hassle-free,
              low-interest loans from the banks you prefer.
            </h3>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Indian banks don’t offer non-collateralized loans or high loan
              amounts to NRI, even if they do, it’s very time-consuming and
              tedious.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              German banks don’t offer the best interest rates when they offer
              loans to immigrants because of the lack of credit history.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              We have partnerships with banks in both India & Germany that can
              offer better loans by leveraging your credit history in both
              countries.
            </p>
          </div>
          <div className="col-md">
            <img
              className="img-fluid"
              src="https://assets.revolut.com/media/business/landing/features/feature-2.svg"
            />
          </div>
        </div>
        {/* Third Row End*/}
        {/*Fourth Row Start*/}
        <div className="row align-items-center">
          <div className="col-md">
            <img
              className="img-fluid"
              src="https://assets.revolut.com/media/business/landing/features/feature-4.svg"
            />
          </div>
          <div className="col-md order-first order-md-last">
            <h3>We don’t sell your data to ANYONE. Period.</h3>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>
              You completely own your data and we hope to empower you with it.
              You can decide to delete all your data with us.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Your data will be shared with financial institutions of your
              choice only if you explicitly give us the consent to share.
            </p>
            <p className="text-muted">
              <span>
                <svg
                  className="bi bi-arrow-right"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>{" "}
              Your data privacy and security is of utmost importance to us. We
              use state-of-the-art encryption technologies to store your data in
              your phone as well as in our secured databases.
            </p>
          </div>
        </div>
        {/*Fourth Row End*/}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;

function Form() {
  const [email, setMail] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    app
      .database()
      .ref("users")
      .push({
        email,
      })
      .then(function (response) {
        setLoading(false);
        setSuccess(true);
        setMail("");
      })
      .catch(function (error) {
        setLoading(false);
        setMail("");
      });
  };

  const onChangeHandler = (event) => {
    setMail(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row align-items-center">
        <div className="col-sm col-md-8 col-lg-8 align-self-center">
          <div className="form-group mr-sm-3 mb-3 mb-lg-0 w-100">
            <label htmlFor="inputEmail" className="sr-only">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="inputEmail"
              placeholder="Email"
              required
              value={email}
              onChange={onChangeHandler}
            />
            {success ? (
              <div className="text-success">
                You will be notified
                <span role="img" aria-label="success">
                  🙂
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-auto align-self-center">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg mb-3 mb-md-0 font-weight-light d-flex justify-content-center align-items-center"
          >
            {loading ? "Just a moment ..." : "Join WaitList"}
          </button>
        </div>
      </div>
    </form>
  );
}

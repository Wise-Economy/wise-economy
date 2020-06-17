import React from "react";

import { app } from "../../firebase";

import "./LandingPage.css";
import Cheetah from "../../assets/cheetah.png";

function LandingPage() {
  return (
    <React.Fragment>
      <header className="navbar navbar-light bg-white sticky-top d-flex align-items-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <a className="text-decoration-none font-weight-bold h2" href="/">
              Wiseeco
            </a>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row justify-content-center justify-content-lg-around align-items-center py-5">
          <div className="col col-md-8 col-lg-8 col-xl-8 py-5">
            <h1 className="display-2 font-weight-bold">
              Untangling personal finances for global citizens.
            </h1>
            <p className="text-secondary">
              Manage all your Indian and German bank accounts in a single app.
              Instant remittance of money to India using the best rates in the
              market without any hidden charges and fees. Use your credit
              history in both countries to avail hassle-free, low-interest loans
              from the banks of your choice.
            </p>
            <Form />
          </div>
          <div className="col col-lg-4 col-xl-4 py-5 d-none d-lg-block">
            <img className="img-fluid" alt="cheetah" src={Cheetah} />
          </div>
        </div>
      </div>
      <div className="dotsback">
        <div className="container">
          <div className="cards">
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">Manage all your bank accounts</h4>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Managing bank accounts in two countries is not an easy job
                    and the pain is real. We give you an aggregated view of all
                    your accounts and a peace of mind.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Check on the up-to-date bank balances, all your
                    transactions in both countries.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Take advantage of our categorization of your expenses to
                    set budgets and get analytics driven insights about your
                    expenditure, loan-payments, credit card billing etc.
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">
                  Instant remittance to any bank account in India
                </h4>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Remit money using the same app. Initiate the transaction
                    directly from your German bank account without any charges.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ We offer the best rates in the market. We don’t charge you
                    hefty fees when you send your money to India.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Money sent from your account will be credited to the
                    Indian beneficiary in less than an hour. Get notified in the
                    app when the transaction is completed.
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">
                  Use your credit history in both countries to avail
                  hassle-free, low-interest loans from the banks you prefer.
                </h4>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Indian banks don’t offer non-collateralized loans or high
                    loan amounts to NRI, even if they do, it’s very
                    time-consuming and tedious.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ German banks don’t offer the best interest rates when they
                    offer loans to immigrants because of the lack of credit
                    history.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ We have partnerships with banks in both India & Germany
                    that can offer better loans by leveraging your credit
                    history in both countries.
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">
                  We don’t sell your data to ANYONE. Period.
                </h4>
                <p className="card-text text-secondary">
                  <small>
                    ◘ You completely own your data and we hope to empower you
                    with it. You can decide to delete all your data with us.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Your data will be shared with financial institutions of
                    your choice only if you explicitly give us the consent to
                    share.
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ◘ Your data privacy and security is of utmost importance to
                    us. We use state-of-the-art encryption technologies to store
                    your data in your phone as well as in our secured databases.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="d-flex flex-row justify-content-around">
          <div>
            <a className="text-decoration-none font-weight-bold h2" href="/">
              Wiseeco
            </a>
          </div>
          <div>
            <h6 className="p-1">COMPANY</h6>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              About
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Blog
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Careers
            </a>
          </div>
          <div>
            <h6 className="p-1">FOLLOW</h6>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Facebook
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Instagram
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Twitter
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <small className="">
          © {new Date().getFullYear()} Wiseeco, Inc.
          <a href="/" className="text-secondary mx-1">
            Terms
          </a>{" "}
          <a href="/" className="text-secondary mx-1">
            Privacy
          </a>
        </small>
      </div>
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
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col col-lg-8">
          <div className="form-group mr-sm-3 mb-3 mb-md-0">
            <label htmlFor="inputEmail" className="sr-only">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow-sm"
              id="inputEmail"
              placeholder="Email"
              required
              value={email}
              onChange={onChangeHandler}
            />
            {success ? (
              <div className="text-success">
                You will be notified{" "}
                <span role="img" aria-label="success">
                  🙂
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <div className="col col-lg-4">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary mb-3 mb-md-0 font-weight-light shadow d-flex justify-content-center align-items-center"
          >
            {loading ? "Just a moment ..." : "Join Waitlist"}
          </button>
        </div>
      </div>
    </form>
  );
}

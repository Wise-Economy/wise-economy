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
          <div className="col col-md-8 col-lg-6 col-xl-6 py-5">
            <h1 className="display-3">
              A new era of banking for faster payments
            </h1>
            <p className="text-secondary">
              Exchange money with no hidden fees. Buy crypto, gold, and trade
              stock commission-free from $1. Manage your money with spending
              analytics. Join over 10 million Wiseeco customers.
            </p>
            <Form />
          </div>
          <div className="col col-lg-6 col-xl-6 py-5 d-none d-lg-block">
            <img className="img-fluid" alt="cheetah" src={Cheetah} />
          </div>
        </div>
      </div>
      <div className="dotsback">
        <div className="container">
          <div className="cards">
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">
                  Manage your money better with spending analytics
                </h4>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Set budgets, get instant spending notifications, and see
                    weekly insights to keep your spending on track
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Connect your other bank accounts to Revolut with Open
                    Banking and manage all your finances in one place
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">Get daily discounts and cashback</h4>
                <p className="card-text text-secondary">
                  <small>✔ Save money every day with Perks</small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Earn rewards you’ll actually use on travel, retail,
                    restaurants and more
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Unlock new offers when you use your Wiseeco cards
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">
                  Send money all over the world instantly, without hidden fees
                </h4>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Send, request money, or split bills with friends and
                    family instantly, whether they’re across the table or across
                    the globe
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Transfer money abroad in 30 currencies with the interbank
                    exchange rate, with a small 0.5% fee for anything above
                    £1,000 each month. A flat mark-up on weekends and on certain
                    currencies may apply, it’s only fair
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0 shadow rounded-lg m-3">
              <div className="card-body">
                <h4 className="card-title">
                  Earn daily interest on your savings
                </h4>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Put your money to work. Get paid daily interest on your
                    GBP funds
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ✔ No minimum amounts. Deposit and withdraw your money
                    whenever you want, with no locking period
                  </small>
                </p>
                <p className="card-text text-secondary">
                  <small>
                    ✔ Round payments and save your spare change, or make a
                    one-off or recurring transfer. It’s up to you. This is
                    savings made simple
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
            {loading ? "Just a moment ..." : "Get Notified"}
          </button>
        </div>
      </div>
    </form>
  );
}

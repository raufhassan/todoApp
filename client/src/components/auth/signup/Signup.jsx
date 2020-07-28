import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default function SignupStyle(props) {
  const { errors } = props;

  return (
    <div>
        <div className="container ">
          <div className="row" style={{ marginTop: "10%" }}>
            <div className="col-12 col-md-6 col-md-offset-3">
              <h1 className="display-4 text-center">Log In</h1>
              <h3 className="lead text-center text-info">
                SIGN UP TODO APP
              </h3>
              <form onSubmit={props.onSubmit}>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name,
                    })}
                    placeholder="Email Address"
                    name="name"
                    value={props.name}
                    onChange={props.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>  
                <div className="form-group">
                  <label htmlFor="">Email </label>
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email"
                    name="email"
                    value={props.email}
                    onChange={props.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={props.password}
                    onChange={props.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Re-type Password"
                    name="password2"
                    value={props.password2}
                    onChange={props.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-info btn-block btn-fill btn-wd mt-4"
                />
              </form>
              <Link className="mt-3 pull-right" to="login">already have an account</Link>

            </div>
          </div>
        </div>
    </div>
  );
}

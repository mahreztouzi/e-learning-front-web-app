import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthActions } from "../../redux/actions";
import Loader from "../loader";
import { CheckIcon, LogoutIcon } from "../../icons/index";
import Popup from "reactjs-popup";
import "../../index.css";
// import "reactjs-popup/dist/index.css";

const UserInfo = ({ isLoading, user, logout }) => {
  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      {" "}
      <Loader size="50" />{" "}
    </div>
  ) : (
    <div className="bg-gray-50 flex ">
      <div className=" bg-white p-5 border-2 rounded-xl mx-auto mt-20 mb-10 lg:w-1/2 md:w-3/5 sm:w-4/5">
        <div>
          <h1 className="lg:text-3xl md:text-xl font-medium antialiased text-left p-5">
            Profile
          </h1>
        </div>
        <div class="flex items-stretch space-x-12">
          <div class="flex-column justify-center items-stretch flex-1">
            {/* <img
                src={
                  this.props.user.picture
                    ? this.props.user.picture
                    : profilephotos.male1
                }
                alt="my profile pic"
                class="rounded-lg object-scale-down"
              /> */}
            <form>
              {/* Male */}
              <h4 className="-mb-2 mt-3">Male</h4>
              <div className="my-2 flex flex-wrap">
                <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  {/* <div
                    className={
                      (this.state.selectedOption === profilephotos.male1
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div> */}
                  {/* <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={this.state.selectedOption === profilephotos.male1}
                    value={profilephotos.male1}
                  />
                  <img
                    src={profilephotos.male1}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label>
                <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.male2
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div> */}
                  {/* <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                  
                    checked={this.state.selectedOption === profilephotos.male2}
                    value={profilephotos.male2}
                  /> */}
                  {/* <img
                    src={profilephotos.male2}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  /> */}
                </label>
                {/* <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.male3
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={this.state.selectedOption === profilephotos.male3}
                    value={profilephotos.male3}
                  />
                  <img
                    src={profilephotos.male3}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label> */}
                {/* <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.male4
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={this.state.selectedOption === profilephotos.male4}
                    value={profilephotos.male4}
                  />
                  <img
                    src={profilephotos.male4}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label> */}
              </div>
              {/* Female */}
              <h4 className="-mb-2 mt-3">Female</h4>
              <div className="my-2 flex flex-wrap">
                {/* <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.female1
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={
                      this.state.selectedOption === profilephotos.female1
                    }
                    value={profilephotos.female1}
                  />
                  <img
                    src={profilephotos.female1}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label> */}
                {/* <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.female2
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={
                      this.state.selectedOption === profilephotos.female2
                    }
                    value={profilephotos.female2}
                  />
                  <img
                    src={profilephotos.female2}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label> */}
                {/* <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.female3
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={
                      this.state.selectedOption === profilephotos.female3
                    }
                    value={profilephotos.female3}
                  />
                  <img
                    src={profilephotos.female3}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label> */}
                {/* <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                  <div
                    className={
                      (this.state.selectedOption === profilephotos.female4
                        ? "block "
                        : "hidden ") +
                      "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                    }
                  >
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <input
                    type="radio"
                    id="image1"
                    className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                    onChange={this.onValueChange}
                    checked={
                      this.state.selectedOption === profilephotos.female4
                    }
                    value={profilephotos.female4}
                  />
                  <img
                    src={profilephotos.female4}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0"
                    loading="lazy"
                  />
                </label> */}
              </div>
            </form>
          </div>
          {/* main form */}
          <form className="flex-1 min-w-min">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Nom
              </label>
              <input
                value={user.name}
                name="name"
                // onChange={(e) => this.inputChange(e)}
                type="text"
                className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                id="name"
                // placeholder={dname ? dname : "John Doe"}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                value={user.email}
                name="email"
                // onChange={(e) => this.inputChange(e)}
                type="email"
                className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                // placeholder={demail}
              />
            </div>
            <div>
              <label htmlFor="companyname" className="text-sm font-medium">
                nom
              </label>
              <input
                value={user.name}
                name="companyName"
                // onChange={(e) => this.inputChange(e)}
                type="text"
                className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                id="companyname"
                // placeholder={dcompanyName}
              />
            </div>
            <div>
              <label htmlFor="location" className="text-sm font-medium">
                role
              </label>
              <input
                name="location"
                value={user.role}
                // onChange={(e) => this.inputChange(e)}
                type="text"
                className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="location"
              />
            </div>
            {/* <div>
              <label
                htmlFor="Max_Limit_of_Inventory"
                className="text-sm font-medium"
              >
                Max Limit of Inventory
              </label>
              <input
                value={0}
                name="maxLimit"
                // onChange={(e) => inputChange(e)}
                type="number"
                className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="Max_Limit_of_Inventory"
                // placeholder={dmaxLimit ? dmaxLimit : 0}
              />
            </div> */}
            {/* save changes button */}
            <button
              // onClick={submitForm}
              type="submit"
              className={`w-full  cursor-pointer bg-primary hover:bg-indigo-700 transition-all py-2 px-4 text-sm text-white rounded-lg border focus:outline-none`}
            >
              save changes
            </button>
          </form>
        </div>
        {/* logout button */}

        <Popup
          trigger={
            <button
              className={`w-full transition-all duration-300 cursor-pointer bg-red-100 py-2 px-4 text-sm text-red-500 rounded-lg border hover:bg-red-500 hover:text-white`}
            >
              Deconnexion
            </button>
          }
          modal
        >
          {(close) => (
            <div className="p-8 rounded-xl flex space-y-2 flex-col">
              <div className="p-4 bg-indigo-200 rounded-full w-16 h-16 flex justify-center items-center">
                <LogoutIcon stroke="indigo"></LogoutIcon>
              </div>
              <h1 className="text-xl font-bold">Vous êtes sure ?</h1>
              <h2 className="text-md font-medium text-subtle">
                Vous allez être déconnecté du systeme
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                  className={`w-full transition-all duration-300 cursor-pointer bg-gray-100 py-2 px-4 text-sm text-primary rounded-lg border hover:bg-primary hover:text-white`}
                >
                  Annuler
                </button>
                <button
                  onClick={logout}
                  className={`w-full transition-all duration-300 cursor-pointer bg-red-500 py-2 px-4 text-sm text-white rounded-lg border hover:bg-red-700 hover:text-white`}
                >
                  Deconnexion
                </button>
              </div>
            </div>
          )}
        </Popup>
        {/* <Link to="/">
          </Link> */}
      </div>
    </div>
  );
};

const mapToState = (state) => {
  return {
    error: state.auth.errorMessage,
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user.user,
    token: state.auth.user.token,
  };
};

const mapToStateDispatch = (dispatch) => {
  return {
    logout: () => dispatch(AuthActions.logout()),
  };
};

export default connect(mapToState, mapToStateDispatch)(UserInfo);

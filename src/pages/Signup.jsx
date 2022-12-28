import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

import LeftImg from "../images/image-1.png";
import RightImg from "../images/image-2.png";

function Signup() {
  const { setIsLoggedin } = useGlobalContext();
  const navigate = useNavigate();

  // navigate to Dashbord when the user clicks the
  // signup button.
  const navigateToDashboard = () => {
    navigate("/");
  };

  // navigating to dashboard page on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedin(true);
    navigateToDashboard();
  };

  return (
    <section>
      <div
        className="absolute bottom-0 left-0 w-[9rem] md:w-[11rem]
      lg:w-[13rem] xl:w-[15rem]"
      >
        <img src={LeftImg} alt="" className="" />
      </div>
      <div
        className="absolute top-[15rem] right-0 w-[9rem] md:w-[11rem]
      lg:w-[13rem] xl:w-[15rem]"
      >
        <img src={RightImg} alt="" className="" />
      </div>
      <div className="flex flex-col items-center justify-center mt-5 sm:mt-0">
        <h1
          className="max-w-md text-4xl font-medium text-center md:text-5xl
      md:text-left"
        >
          Signup
        </h1>
        <p
          className="max-w-md text-center text-darkGrayishBlue md:text-left
      md:text-xl mt-5"
        >
          Stop spending, Start Investing
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-5
        items-center"
        >
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="sm:w-[19rem] xl:w-[27rem] md:w-[23rem] 
              xl:h-[3rem] w-[17rem] lg:w-[25rem]
              p-3 mt-1 xl:mb-6 rounded focus:outline-0 mb-4"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="sm:w-[19rem] xl:w-[27rem] xl:h-[3rem] p-3 mt-1 xl:mb-8 rounded 
              w-[17rem] mb-4 md:w-[23rem] focus:outline-0 lg:w-[25rem]"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="sm:w-[19rem] xl:w-[27rem] xl:h-[3rem] p-3 mt-1 xl:mb-8 rounded 
              w-[17rem] mb-4 md:w-[23rem] focus:outline-0 lg:w-[25rem]"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="sm:w-[19rem] xl:w-[27rem] xl:h-[3rem] p-3 mt-1 xl:mb-6 rounded 
              w-[17rem] mb-4 md:w-[23rem] focus:outline-0 lg:w-[25rem]"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="sm:w-[19rem] xl:w-[27rem] xl:h-[3rem] p-3 mt-1 rounded 
              w-[17rem] md:w-[23rem] focus:outline-0 lg:w-[25rem]"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="mt-5 xl:mt-8 mb-6 sm:px-[3.5rem] md:pl-[1rem] xl:ml-0
          lg:pr-3">
            <label
              className="inline-flex items-center mx-[2rem] sm:mx-[5rem]
            md:px-[3rem] md:mx-[8rem]"
            >
              <input
                type="checkbox"
                className="w-6 h-8 border-0 rounded-md focus:ring-0 
                accent-forestGreen md:mr-1 lg:mr-0"
              />
              <span className="ml-2">
                By continuing, you agree to the{" "}
                <a
                  href="https://google.com"
                  className="text-forestGreen underline"
                >
                  Terms and conditions
                </a>
              </span>
            </label>
          </div>
          <button
            className="flex items-center py-4 px-10 sm:px-12 md:px-[9.5rem]
             xl:py-4 xl:px-[11.6rem] lg:px-[10.5rem] bg-black font-semibold
        rounded text-white justify-center hover:bg-charcoalBlack mb-3
        "
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;

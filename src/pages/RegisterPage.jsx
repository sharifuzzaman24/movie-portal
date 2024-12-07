import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const validateForm = (form) => {
  let isValid = true;
  const errors = {};

  const name = form.name.value.trim();
  if (name.length < 3) {
    errors.name = "Name can't be less than 3 characters.";
    isValid = false;
  }

  const photo = form.photo.value.trim();
  if (photo && !/^https?:\/\/.+/.test(photo)) {
    errors.photo = "Photo must be a valid URL.";
    isValid = false;
  }

  const email = form.email.value.trim();
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errors.email = "Enter a valid email address.";
    isValid = false;
  }

  const password = form.password.value.trim();
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
    isValid = false;
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    errors.password =
      "Password must contain an uppercase letter, a lowercase letter, and a number.";
    isValid = false;
  }

  return { isValid, errors };
};

const RegisterPage = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { isValid, errors } = validateForm(form);

    if (!isValid) {
      setError(errors);
    } else {
      setError({});
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      try {
        const result = await createUser(email, password);
        setUser(result.user);

        await updateUserProfile({ displayName: name, photoURL: photo });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "User registered successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      } catch (err) {
        toast.error(`Failed to register: ${err.message}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto min-h-screen">
        <section className="container mx-auto pt-32 pb-32">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
            <form onSubmit={handleRegister}>
              <div className="w-full mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  onChange={handleInputChange}
                  className={`p-3 w-full rounded-lg border ${
                    error.name ? "border-red-500" : "dark:border-gray-700"
                  } dark:bg-gray-800`}
                />
                {error.name && <p className="text-red-500 mt-1">{error.name}</p>}
              </div>
              <div className="w-full mb-4">
                <label className="block mb-2">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter your photo URL..."
                  onChange={handleInputChange}
                  className={`p-3 w-full rounded-lg border ${
                    error.photo ? "border-red-500" : "dark:border-gray-700"
                  } dark:bg-gray-800`}
                />
                {error.photo && (
                  <p className="text-red-500 mt-1">{error.photo}</p>
                )}
              </div>
              <div className="w-full mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  onChange={handleInputChange}
                  className={`p-3 w-full rounded-lg border ${
                    error.email ? "border-red-500" : "dark:border-gray-700"
                  } dark:bg-gray-800`}
                />
                {error.email && (
                  <p className="text-red-500 mt-1">{error.email}</p>
                )}
              </div>
              <div className="w-full mb-4">
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  onChange={handleInputChange}
                  className={`p-3 w-full rounded-lg border ${
                    error.password ? "border-red-500" : "dark:border-gray-700"
                  } dark:bg-gray-800`}
                />
                {error.password && (
                  <p className="text-red-500 mt-1">{error.password}</p>
                )}
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700">
                Register
              </button>
            </form>
            <p className="mt-6 text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-red-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RegisterPage;

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserRecommendations from "../components/UserRecommendations";
import AddRecModal from "../components/AddRecModal";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const location = useLocation()

  // Keeps this fetch request from looping infinitely
  useEffect(() => {
      fetch('https://undefined-rest-api.herokuapp.com/api/users/?format=json'
      ).then(response => {
          return response.json();
      }).then(data => {
          setIsLoading(false);
          setLoadedUsers(data);
      });
  }, []);

  
  // Displays a temporary loading screen while fetch request is running
  if (isLoading) {
      return (
          <section>
              <p>Loading...</p>
          </section>
      );
  }

  console.log(loadedUsers)

  return (
    <div>
      <NavBar />
      <span>Path is: {location.pathname}</span>
      <div>
        <div className="grid place-items-center flex items-center">
          <img
            className="object-cover h-48 m-2 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrF3t4HTqY8rjh54a9PrakBAZsJ5gPFv2CQ&usqp=CAU"
            alt="Avatar"
          />
          <div>
            <a className="mx-2 text-2xl font-semibold text-gray-700">
              Jone Doe
            </a>
          </div>
          <a>City, ST</a>
          <button className="text-white bg-gray-400 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            Follow
          </button>
        </div>
        <div className="">
          <a className="text-2xl p-1 ">Recs</a>
          <AddRecModal />
        </div>
        <div className="grid grid-cols-3">
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
          <UserRecommendations />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;

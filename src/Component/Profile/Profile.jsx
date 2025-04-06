import React from "react";

const Profile = () => {
  const user = {
    name: "Aditya Kesarwani",
    email: "adityakearwani073@gamil.com",
    phone: "+91 1234567890",
    address: "Prayagraj, Uttar Pradesh, India",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 pt-20 mt-20 md:p-12 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
            />
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
                  {user.name}
                </h1>
                <button className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all shadow hover:shadow-lg hover:scale-[1.02]">
                    Edit
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
                <p>
                  <span className="font-medium text-gray-600">Email:</span>{" "}
                  {user.email}
                </p>
                <br />
                <p>
                  <span className="font-medium text-gray-600">Phone:</span>{" "}
                  {user.phone}
                </p>
                <p className="sm:col-span-2">
                  <span className="font-medium text-gray-600">Address:</span>{" "}
                  {user.address}
                </p>
              </div>

              <div className="text-right pt-6">
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm transition-all shadow hover:shadow-lg hover:scale-[1.02]">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;

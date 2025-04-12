import React from 'react';

const Profile = () => {
  const user = {
    name: "Aditya Kesarwani",
    email: "adityakesarwani073@gamil.com",
    phone: "+91 1234567890",
    address: "Prayagraj, Uttar Pradesh, India",
    memberSince: "April 2023",
    lastLogin: "Today, 09:42 AM",
    device: "Chrome on Windows",
    ipAddress: "192.168.1.1",
  };

  return (
    <div className="min-h-screen bg-white p-8 text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto bg-white border rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-cyan-500 rounded-full text-white flex items-center justify-center text-3xl font-bold">
              AK
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-sm text-gray-500">Member since {user.memberSince}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" />
              <div className="w-10 h-5 bg-gray-300 rounded-full p-1">
                <div className="bg-white w-4 h-4 rounded-full shadow transform transition duration-300"></div>
              </div>
              <span className="ml-2 text-sm">Public Profile</span>
            </label>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-4">Preferences</h2>
            <div className="space-y-3">
              {["Email Notifications", "SMS Alerts", "Two-Factor Authentication"].map((label, idx) => (
                <div className="flex justify-between items-center" key={idx}>
                  <span>{label}</span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-black peer-focus:ring-black"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Account Activity</h2>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-50 p-3 rounded-md">Last Login: {user.lastLogin}</div>
              <div className="bg-gray-50 p-3 rounded-md">Device: {user.device}</div>
              <div className="bg-gray-50 p-3 rounded-md">IP Address: {user.ipAddress}</div>
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-4">Connected Accounts</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                <span>Google</span><span className="text-green-600 font-semibold">Connected</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                <span>Facebook</span><span className="text-gray-400">Not Connected</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
            Logot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

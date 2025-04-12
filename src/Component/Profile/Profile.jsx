import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Aditya Kesarwani",
    email: "adityakesarwani073@gamil.com",
    phone: "+91 1234567890",
    address: "Prayagraj, Uttar Pradesh, India",
  });

  // const [isPublic, setIsPublic] = useState(false);
  const [localDarkMode, setLocalDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (localDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    return () => {
      root.classList.remove("dark");
    };
  }, [localDarkMode]);

  const handleLogout = () => {
    toast.success("Successfully logged out");
  };

  const handleEditProfile = () => {
    toast.info("Edit profile functionality would open here");
  };

  const toggleLocalTheme = () => {
    setLocalDarkMode((prev) => !prev);
  };

  const [isPublic, setIsPublic] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const toggleClasses = (enabled) =>
    `${enabled ? "bg-cyan-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`;

  const circleClasses = (enabled) =>
    `${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full transition-transform`;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center mt-20 pt-15 justify-center p-6 md:p-2">
      <div className="max-w-4xl w-full bg-white rounded-xl p-8 shadow-md">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-cyan-500 text-white text-2xl font-bold rounded-full flex items-center justify-center">
            AK
          </div>
          <div>
            <h1 className="text-2xl font-bold">Aditya Kesarwani</h1>
            <p className="text-gray-500">Member since April 2023</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <span>Public Profile</span>
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={toggleClasses(isPublic)}
            >
              <span className={circleClasses(isPublic)} />
            </button>
          </div>
          <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-700 transition duration-200">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p><span className="font-medium">Email:</span> adityakesarwani073@gmail.com</p>
            <p><span className="font-medium">Phone:</span> +91 1234567890</p>
            <p><span className="font-medium">Address:</span> Prayagraj, Uttar Pradesh, India</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Account Activity</h3>
            <p><span className="font-medium">Last Login:</span> Today, 09:42 AM</p>
            <p><span className="font-medium">Device:</span> Chrome on Windows</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Preferences</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={toggleClasses(emailNotifications)}
              >
                <span className={circleClasses(emailNotifications)} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>SMS Alerts</span>
              <button
                onClick={() => setSmsAlerts(!smsAlerts)}
                className={toggleClasses(smsAlerts)}
              >
                <span className={circleClasses(smsAlerts)} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>Two-Factor Authentication</span>
              <button
                onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                className={toggleClasses(twoFactorAuth)}
              >
                <span className={circleClasses(twoFactorAuth)} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Connected Accounts</h3>
          <p>Google – <span className="text-green-600 font-medium">Connected</span></p>
          <p>Facebook – <span className="text-gray-500">Not Connected</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

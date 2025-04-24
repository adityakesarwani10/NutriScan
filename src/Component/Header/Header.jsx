import logo from './Nutriscan_logo.png';
import React, { useRef,useState } from 'react';
import { useNavigate,NavLink, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"


// inside Header component



const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef();

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim()) {
      setSearchText(searchInput.trim());
      navigate("/NutritionSearch");
      setSearchInput(""); // Optional: clear input after search
    }
  };

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 w-15 m-0" />

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10 items-center text-sm ml-10 font-medium">
        <NavLink to="/"
            className={({isActive}) =>
                `${isActive? "text-blue-300" : "text-white"} hover:text-blue-300`
            }
        >
            Home
        </NavLink>
        <NavLink to="/About"
            className={({isActive}) =>
                `${isActive? "text-blue-300" : "text-white"} hover:text-blue-300`
            }
        >
            About
        </NavLink>
        <NavLink to="/Services"
            className={({isActive}) =>
                `${isActive? "text-blue-300" : "text-white"} hover:text-blue-300`
            }
        >
            Services
        </NavLink>
        <NavLink to="/Contact"
            className={({isActive}) =>
                `${isActive? "text-blue-300" : "text-white"} hover:text-blue-300`
            }
        >
            Contact
        </NavLink>
        <NavLink to="/Profile"
            className={({isActive}) =>
                `${isActive? "text-blue-300" : "text-white"} hover:text-blue-300`
            }
        >
            Profile
        </NavLink>
        <NavLink to="/Scanner"
            className={({isActive}) =>
                `${isActive? "text-blue-300" : "text-white"} hover:text-blue-300`
            }
        >
            Scanner
        </NavLink>
        </nav>

        <div className="flex items-center space-x-3">
          <NavLink to="/login">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              Sign in
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">Get Started</Button>
          </NavLink>
        </div>

        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center bg-gray-800 px-2 py-1 rounded">
          <input
            type="text"
            // value={searchInput}
            onAbort={(e) => setSearchInput(e.target.value)}
            ref={inputRef}
            placeholder="Search..."
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="bg-transparent focus:outline-none text-sm text-white placeholder-gray-400"
          />
        </div> */}

        {/* Mobile Menu Icon */}
        <div className="relative md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
              <ul className="flex flex-col space-y-2 p-4">
                <li><NavLink to="/"
                      className={({isActive}) =>
                          `${isActive? "text-blue-800" : "text-gray-800"} hover:text-blue-300`
                      }
                  >
                      Home
                  </NavLink>
                  </li>
                   <li><NavLink to="/About"
                      className={({isActive}) =>
                          `${isActive? "text-blue-800" : "text-gray-800"} hover:text-blue-300`
                      }
                  >
                      About
                  </NavLink>
                  </li>
                  <li>

                  <NavLink to="/Services"
                      className={({isActive}) =>
                          `${isActive? "text-blue-800" : "text-gray-800"} hover:text-blue-300`
                      }
                  >
                      Services
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/Contact"
                      className={({isActive}) =>
                          `${isActive? "text-blue-800" : "text-gray-800"} hover:text-blue-300`
                      }
                  >
                      Contact
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/Profile"
                      className={({isActive}) =>
                          `${isActive? "text-blue-800" : "text-gray-800"} hover:text-blue-300`
                      }
                  >
                      Profile
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/Scanner"
                      className={({isActive}) =>
                          `${isActive? "text-blue-800" : "text-gray-800"} hover:text-blue-300`
                      }
                  >
                      Scanner
                  </NavLink></li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
export default Header;
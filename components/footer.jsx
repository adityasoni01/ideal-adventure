import Link from "next/link";

export default function Footer(){
  return (
<footer className="w-full py-6 px-4 bg-footer-color"> {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl flex flex-col items-center text-gray-200">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center">
          
          {/* :SOCIAL NETWORKS */}
          <div className="py-4 px-2 flex">
            
            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/ankita-thakur-032899229" className="ml-3 text-black">
              <span className="sr-only">Linkedin</span>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/adityasoni01/ideal-adventure" className="ml-3 text-black">
              <span className="sr-only">GitHub</span>
              <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
          </div>

          {/* :NAVIGATION */}
          <nav className="py-4 px-2 flex flex-wrap justify-center list-none">
            <li className="p-3 hover:font-semibold text-black font-bold"><a href="/">Home</a></li>
            <li className="p-3 hover:font-semibold text-black font-bold"><a href="/experience">Experience</a></li>
            <li className="p-3 hover:font-semibold text-black font-bold"><a href="/plan">Plan</a></li>
            <li className="p-3 hover:font-semibold text-black font-bold"><a href="/posts">Posts</a></li>
            <li className="p-3 hover:font-semibold text-black font-bold"><a href="/explore">Explore</a></li>
            <li className="p-3 hover:font-semibold text-black font-bold"><a href="/about">About Us</a></li>
            
            
          </nav>

          {/* :CONTACT */}
          <div className="px-2 flex flex-col">
            {/* Email */}
            <p className="flex text-xs text-black font-medium tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:aditya01soni01@gmail.com">aditya01soni01@gmail.com</a>
            </p>
            <p className="flex text-xs text-black font-medium tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:aditya01soni01@gmail.com">ankitathakur6039@gmail.com</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
import { useState, useEffect } from "react";
// Create a custom hook named useMediaQuery that takes a media query string as input
const useMediaQuery = (query: string) => {
  // State to store whether the media query matches
  const [matches, setMatches] = useState(false);

  // Effect to handle media query matching and updates
  useEffect(() => {
    // Get a MediaQueryList object representing the specified query
    const media = window.matchMedia(query);

    // Update the matches state if the current state differs from the query's matches
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listener function to update matches state on window resize
    const listener = () => setMatches(media.matches);

    // Add event listener for window resize
    window.addEventListener("resize", listener);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]); // Only re-run the effect if matches or query change

  // Return the matches state to indicate whether the query matches
  return matches;
};

// Export the hook for use in other components
export default useMediaQuery;

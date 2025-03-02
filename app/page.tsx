import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.netodev.tech/api");
        const data = await response.json();
        console.log("API Response:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>TESTE</h1>
      <p>this is a test for the github action</p>
    </div>
  );
}

/*
1. VERSION WITH USEEFFECT AND USESTATE
*/

// import { useEffect, useState } from "react";
// import { tourSchema, type Tour } from "./types";

// const url = "https://www.course-api.com/react-tours-project";

// function Component() {
//   // tours
//   const [tours, setTours] = useState<Tour[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch tours...`);
//         }

//         const rawData: Tour[] = await response.json();

//         const result = tourSchema.array().safeParse(rawData);

//         if (!result.success) {
//           console.log(result.error.message);
//           throw new Error(`Failed to parse tours data...`);
//         }
//         setTours(result.data);
//       } catch (error) {
//         const message =
//           error instanceof Error ? error.message : "there was an error...";
//         setIsError(message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <h3>Loading...</h3>;
//   }

//   if (isError) {
//     return <h3>Error: {isError}</h3>;
//   }

//   return (
//     <div>
//       <h2 className='mb-1'>Tours</h2>
//       {tours.map((tour) => {
//         return (
//           <p key={tour.id} className='mb-1'>
//             {tour.name}
//           </p>
//         );
//       })}
//     </div>
//   );
// }
// export default Component;

/*
2. VERSION WITH REACT-QUERY
*/

import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./types";

function Component() {
  const {
    data: tours,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });
  console.log("Is loading: ", isLoading);
  console.log("Is error: ", isError);
  console.log("Error: ", error);
  console.log("Data: ", tours);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <h2>
        Error:{" "}
        {error instanceof Error ? error.message : "there was an error..."}
      </h2>
    );
  }
  return (
    <div>
      <h2 className='mb-1'>Tours</h2>
      {tours?.map((tour) => {
        return (
          <p className='mb-1' key={tour.id}>
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;

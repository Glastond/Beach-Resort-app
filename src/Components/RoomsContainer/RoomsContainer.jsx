import React from "react";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import Loading from "../Loading/Loading";

// Context API
import { withRoomConsumer } from "../../context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "../RoomsFilter/RoomsFilter";
// import RoomsList from "../RoomsList/RoomsList";
// import Loading from "../Loading/Loading";

// Context API
// import { RoomConsumer } from "../../context";

// export default function RoomsComponent() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from RoomsContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

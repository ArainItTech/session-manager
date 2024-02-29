import React, { useEffect, useState } from "react";
import TimeSlotDisplay from "./TimeSlotDisplay";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firestore";

import { db } from "../config/firestore";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await getSlots();
        console.log(slots);
      } catch (err) {
        console.log("Error occured when fetching books", err);
      }
    })();
  }, [user, slots]);

  const getSlots = async () => {
    setSlots([
      {
        companyId: "company1",
        dates: [
          {
            date: "2022-06-26",
            timeSlots: {
              morning: [
                {
                  startTime: "09:00",
                  endTime: "12:00",
                  available: true,
                },
              ],
              afternoon: [
                {
                  startTime: "12:00",
                  endTime: "15:00",
                  available: false,
                },
              ],
              evening: [
                {
                  startTime: "15:00",
                  endTime: "18:00",
                  available: true,
                },
              ],
            },
          },
          {
            date: "2022-06-27",
            timeSlots: {
              morning: [
                {
                  startTime: "09:00",
                  endTime: "12:00",
                  available: true,
                },
              ],
              afternoon: [
                {
                  startTime: "12:00",
                  endTime: "15:00",
                  available: true,
                },
              ],
              evening: [
                {
                  startTime: "15:00",
                  endTime: "18:00",
                  available: false,
                },
              ],
            },
          },
        ],
      },
      {
        companyId: "company2",
        dates: [
          {
            date: "2022-06-26",
            timeSlots: {
              morning: [
                {
                  startTime: "09:00",
                  endTime: "12:00",
                  available: true,
                },
              ],
              afternoon: [
                {
                  startTime: "12:00",
                  endTime: "15:00",
                  available: true,
                },
              ],
              evening: [
                {
                  startTime: "15:00",
                  endTime: "18:00",
                  available: false,
                },
              ],
            },
          },
          {
            date: "2022-06-27",
            timeSlots: {
              morning: [
                {
                  startTime: "09:00",
                  endTime: "12:00",
                  available: false,
                },
              ],
              afternoon: [
                {
                  startTime: "12:00",
                  endTime: "15:00",
                  available: true,
                },
              ],
              evening: [
                {
                  startTime: "15:00",
                  endTime: "18:00",
                  available: true,
                },
              ],
            },
          },
        ],
      },
    ]);
    const querySnapshot = await getDocs(collection(db, "slots-day"));
    querySnapshot.forEach((doc) => {
        setSlots(doc.data())});
  };

  return (
    <div>
      {" "}
      <TimeSlotDisplay data={slots} />
    </div>
  );
};

export default Dashboard;

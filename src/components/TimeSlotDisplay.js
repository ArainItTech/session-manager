import React from 'react';

const TimeSlotDisplay = ({ data }) => {
  return (
    <div>
      {data.map(company => (
        <div key={company.companyId}>
          <h2>{`Company: ${company.companyId}`}</h2>
          {company.dates.map(date => (
            <div key={date.date}>
              <h3>{`Date: ${date.date}`}</h3>
              <ul>
                <li>Morning:
                  <ul>
                    {date.timeSlots.morning.map(slot => (
                      <li key={`${date.date}-morning-${slot.startTime}`}>
                        {`${slot.startTime} - ${slot.endTime}: ${slot.available ? 'Available' : 'Not Available'}`}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>Afternoon:
                  <ul>
                    {date.timeSlots.afternoon.map(slot => (
                      <li key={`${date.date}-afternoon-${slot.startTime}`}>
                        {`${slot.startTime} - ${slot.endTime}: ${slot.available ? 'Available' : 'Not Available'}`}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>Evening:
                  <ul>
                    {date.timeSlots.evening.map(slot => (
                      <li key={`${date.date}-evening-${slot.startTime}`}>
                        {`${slot.startTime} - ${slot.endTime}: ${slot.available ? 'Available' : 'Not Available'}`}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimeSlotDisplay;
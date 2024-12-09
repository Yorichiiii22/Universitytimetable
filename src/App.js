// import React, { useState, useEffect } from 'react';
// import { 
//   Clock, 
//   Calendar, 
//   Users, 
//   BookOpen, 
//   ChevronLeft, 
//   ChevronRight, 
//   Filter,
//   Search
// } from 'lucide-react';

// const FuturisticTimetable = () => {
//   const [selectedDay, setSelectedDay] = useState('Monday');
//   const [selectedSchool, setSelectedSchool] = useState('School of Computer Science And System Engineering (CSSE-3)');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Check screen size for responsiveness
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Comprehensive timetable data
//   const timetableData = {
//     'School of Computer Science And System Engineering (CSSE-3)': {
//       'Monday': [
//         { time: '11:00 - 12:00', subject: 'Discrete Mathematics', faculty: 'Dr. Suvasis Nayak', room: 'A-LH-206', tags: ['Maths', '4th sem'] },
//         { time: '12:00 - 01:00', subject: 'EECO', faculty: 'Dr. Subhrajit Rath', room: 'A-LH-206', tags: ['EECO', 'Elective'] },
//         { time: '03:00 - 04:00', subject: 'PSS', faculty: 'Prof. S. Ramavath', room: 'B-203', tags: ['Signals', '4 Credit'] },
//         { time: '04:00 - 05:00', subject: 'DBMS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'DBMS'] },
//         { time: '05:00 - 06:00', subject: 'DBMS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'DBMS'] }
//       ],
//       // ... other days (kept same as previous version)
//       'Tuesday': [
//         { time: '11:00 - 12:00', subject: 'IND4', faculty: 'Prof. P. Sunil', room: 'A-LH-203', tags: ['INDI4', '3 credit'] },
//         { time: '12:00 - 01:00', subject: 'Discrete Mathematics', faculty: 'Dr. Suvasis Nayak', room: 'A-LH-203', tags: ['Maths', '4th sem'] },
//         { time: '01:00 - 02:00', subject: 'PSS', faculty: 'Prof. S. Ramavath', room: 'A-LH-203', tags: ['Signals', '4 Credit'] },
//         { time: '03:00 - 04:00', subject: 'OS', faculty: 'Dr. Samaresh Mishra', room: 'B-203', tags: ['OS', 'Operating System'] },
//         { time: '04:00 - 05:00', subject: 'OS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'OS'] },
// 	{ time: '05:00 - 06:00', subject: 'OS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'OS'] }
//       ],

//     },
//     'School of Engineering': [
//       // Additional school data can be added here
//     ]
//   };

//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//   const schools = Object.keys(timetableData);

//   // Filter classes based on search term
//   const filteredClasses = (timetableData[selectedSchool][selectedDay] || [])
//     .filter(slot => 
//       slot.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       slot.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       slot.room.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    

//   // Render class slot
//   const renderClassSlot = (slot, index) => (
//     <div 
//       key={index} 
//       className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl mb-4 shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl"
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <BookOpen className="text-blue-400 w-8 h-8" />
//           <div>
//             <h3 className="text-xl font-bold text-white">{slot.subject}</h3>
//             <p className="text-gray-400">{slot.faculty}</p>
//           </div>
//         </div>
//         <div className="flex flex-col items-end">
//           <span className="text-sm font-semibold text-green-400 mb-1">{slot.time}</span>
//           <span className="bg-purple-600 bg-opacity-20 text-purple-300 px-3 py-1 rounded-full text-sm">
//             {slot.room}
//           </span>
//         </div>
//       </div>
//       {slot.tags && (
//         <div className="mt-2 flex space-x-2">
//           {slot.tags.map((tag, idx) => (
//             <span 
//               key={idx} 
//               className="bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-1 rounded-full text-xs"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-white p-4 md:p-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Header */}
//         <header className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//               KIIT University
//             </h1>
//             <p className="text-lg text-gray-300">Intelligent Timetable System</p>
//           </div>
          
//           {/* Search and Icons */}
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input 
//                 type="text"
//                 placeholder="Search classes..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-gray-800 text-white px-4 py-2 rounded-full w-full md:w-64 focus:ring-2 focus:ring-blue-500 transition-all"
//               />
//               <Search className="absolute right-3 top-3 text-gray-400" />
//             </div>
//             <div className="hidden md:flex space-x-4">
//               <Clock className="text-blue-300" />
//               <Calendar className="text-green-300" />
//               <Users className="text-purple-300" />
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
//           {/* School Selector (Mobile Menu) */}
//           {isMobile ? (
//             <div className="relative">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="w-full bg-gray-800 text-white p-3 rounded-lg flex justify-between items-center"
//               >
//                 {selectedSchool}
//                 <Filter />
//               </button>
//               {isMenuOpen && (
//                 <div className="absolute z-10 w-full bg-gray-800 rounded-lg shadow-2xl mt-2">
//                   {schools.map(school => (
//                     <button 
//                       key={school}
//                       onClick={() => {
//                         setSelectedSchool(school);
//                         setIsMenuOpen(false);
//                       }}
//                       className="w-full text-left p-3 hover:bg-gray-700"
//                     >
//                       {school}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="w-1/4 pr-4 border-r border-gray-700">
//               <h2 className="text-2xl font-semibold mb-4">Schools</h2>
//               {schools.map(school => (
//                 <button 
//                   key={school}
//                   onClick={() => setSelectedSchool(school)}
//                   className={`w-full text-left p-3 rounded-lg mb-2 ${
//                     selectedSchool === school 
//                     ? 'bg-blue-600 text-white' 
//                     : 'hover:bg-gray-700'
//                   }`}
//                 >
//                   {school}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Timetable Section */}
//           <div className="w-full md:w-3/4">
//             {/* Day Navigation */}
//             <div className="flex justify-between items-center mb-6">
//               <button 
//                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
//                 onClick={() => {
//                   const currentIndex = days.indexOf(selectedDay);
//                   const prevIndex = currentIndex > 0 ? currentIndex - 1 : days.length - 1;
//                   setSelectedDay(days[prevIndex]);
//                 }}
//               >
//                 <ChevronLeft />
//               </button>
//               <div className="flex space-x-2 overflow-x-auto">
//                 {days.map(day => (
//                   <button
//                     key={day}
//                     onClick={() => setSelectedDay(day)}
//                     className={`px-4 py-2 rounded-full text-sm md:text-base ${
//                       selectedDay === day 
//                       ? 'bg-purple-600 text-white' 
//                       : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                     }`}
//                   >
//                     {day}
//                   </button>
//                 ))}
//               </div>
//               <button 
//                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
//                 onClick={() => {
//                   const currentIndex = days.indexOf(selectedDay);
//                   const nextIndex = currentIndex < days.length - 1 ? currentIndex + 1 : 0;
//                   setSelectedDay(days[nextIndex]);
//                 }}
//               >
//                 <ChevronRight />
//               </button>
//             </div>

//             {/* Classes */}
//             <div className="space-y-4">
//               {filteredClasses.length > 0 ? (
//                 filteredClasses.map(renderClassSlot)
//               ) : (
//                 <div className="text-center text-gray-400 py-8 bg-gray-800 rounded-2xl">
//                   No classes scheduled for this day
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FuturisticTimetable;


import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Calendar, 
  Users, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  Search
} from 'lucide-react';

const FuturisticTimetable = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedSchool, setSelectedSchool] = useState('School of Computer Science And System Engineering (CSSE-3)');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [remainderAlarm, setRemaindAlarm] = useState(null);

  // Check screen size for responsiveness
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Comprehensive timetable data
  const timetableData = {
    'School Of Computer Science And System Engineering (CSSE-3)': {
      'Monday': [
        { time: '11:00 - 12:00', subject: 'Discrete Mathematics', faculty: 'Dr. Suvasis Nayak', room: 'A-LH-206', tags: ['Maths', '4th sem'] },
        { time: '12:00 - 01:00', subject: 'EECO', faculty: 'Dr. Subhrajit Rath', room: 'A-LH-206', tags: ['EECO', 'Elective'] },
        { time: '03:00 - 04:00', subject: 'PSS', faculty: 'Prof. S. Ramavath', room: 'B-203', tags: ['Signals', '4 Credit'] },
        { time: '04:00 - 05:00', subject: 'DBMS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'DBMS'] },
        { time: '05:00 - 06:00', subject: 'DBMS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'DBMS'] }
      ],
      'Tuesday': [
        { time: '11:00 - 12:00', subject: 'IND4', faculty: 'Prof. P. Sunil', room: 'A-LH-203', tags: ['INDI4', '3 credit'] },
        { time: '12:00 - 01:00', subject: 'Discrete Mathematics', faculty: 'Dr. Suvasis Nayak', room: 'A-LH-203', tags: ['Maths', '4th sem'] },
        { time: '01:00 - 02:00', subject: 'PSS', faculty: 'Prof. S. Ramavath', room: 'A-LH-203', tags: ['Signals', '4 Credit'] },
        { time: '03:00 - 04:00', subject: 'OS', faculty: 'Dr. Samaresh Mishra', room: 'B-203', tags: ['OS', 'Operating System'] },
        { time: '04:00 - 05:00', subject: 'OS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'OS'] },
        { time: '05:00 - 06:00', subject: 'OS(L)', faculty: 'Dr. Samaresh Mishra', room: 'B-WL-102', tags: ['Lab', 'OS'] }
      ],
      'Wednesday': [
        { time: '11:00 - 12:00', subject: 'EECO', faculty: 'Dr. Subhrajit Rath', room: 'A-LH-203', tags: ['EECO'] },
        { time: '12:00 - 01:00', subject: 'DBMS', faculty: 'Dr. Samaresh Mishra', room: 'A-LH-203', tags: ['Data Base Management System'] },
        { time: '01:00 - 02:00', subject: 'Discrete Mathematics', faculty: 'Dr. Suvasis Nayak', room: 'A-LH-203', tags: ['Maths'] },
        { time: '03:00 - 04:00', subject: 'PSS', faculty: 'Prof. S. Ramavath', room: 'B-204', tags: ['Signals'] }
              ],
              'Thursday': [
        { time: '11:00 - 12:00', subject: 'PSS', faculty: 'Prof. S. Ramavath', room: 'A-LH-207', tags: ['Signal'] },
        { time: '12:00 - 01:00', subject: 'Discrete Mathematics', faculty: 'Dr. Suvasis Nayak', room: 'A-LH-207', tags: ['Maths'] },
        { time: '01:00 - 02:00', subject: 'OS', faculty: 'Dr. Samaresh Mishra', room: 'A-LH-207', tags: ['Operating System'] },
        { time: '03:00 - 04:00', subject: 'EECO', faculty: 'Dr. Subhrajit Rath', room: 'B-202', tags: [ 'EECO'] },
        { time: '04:00 - 05:00', subject: 'DBMS', faculty: 'Dr. Samaresh Mishra', room: 'B-202', tags: ['DBMS'] }
      ],
      'Friday': [
        { time: '09:00 - 10:00', subject: 'V(T)', faculty: 'null', room: 'null', tags: ['Elective'] },
        { time: '10:00 - 11:00', subject: 'V(T)', faculty: 'null', room: 'null', tags: ['Elective'] },
        { time: '02:00 - 03:00', subject: 'OS', faculty: 'Dr. Samaresh Mishra', room: 'B-202', tags: ['Operating System'] },
        { time: '03:00 - 04:00', subject: 'INDI4', faculty: 'Prof. P. Sunil', room: 'B-202', tags: ['Industrialisation'] },
        { time: '04:00 - 05:00', subject: 'DBMS', faculty: 'Dr. Samaresh Mishra', room: 'B-202', tags: ['DataBase Management System'] }
      ],

    },
    'School of Engineering': [
      // Additional school data can be added here
    ]
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
  const schools = Object.keys(timetableData);

  // Filter classes based on search term
  const filteredClasses = (timetableData[selectedSchool][selectedDay] || [])
    .filter(slot => 
      slot.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slot.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slot.room.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Set remainder alarm
  const intervalRef = useRef(null);

  useEffect(() => {
    // Clear previous interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set new interval
    intervalRef.current = setInterval(() => {
      const currentTime = new Date().getHours() * 60 + new Date().getMinutes();
      const upcomingClass = filteredClasses.find(slot => {
        const [startHour, startMinute] = slot.time.split(':').map(Number);
        const startTime = startHour * 60 + startMinute;
        return startTime - currentTime >= 0 && startTime - currentTime <= 15;
      });

      if (upcomingClass) {
        setRemaindAlarm(`Your next class is ${upcomingClass.subject} in 15 minutes.`);
      } else {
        setRemaindAlarm(null);
      }
    }, 60000); // Check every minute

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [filteredClasses]);

  // Render class slot
  const renderClassSlot = (slot, index) => (
    <div 
      key={index} 
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl mb-4 shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <BookOpen className="text-blue-400 w-8 h-8" />
          <div>
            <h3 className="text-xl font-bold text-white">{slot.subject}</h3>
            <p className="text-gray-400">{slot.faculty}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold text-green-400 mb-1">{slot.time}</span>
          <span className="bg-purple-600 bg-opacity-20 text-purple-300 px-3 py-1 rounded-full text-sm">
            {slot.room}
          </span>
        </div>
      </div>
      {slot.tags && (
        <div className="mt-2 flex space-x-2">
          {slot.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-white p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              KIIT University
            </h1>
            <p className="text-lg text-gray-300">Intelligent Timetable System</p>
          </div>
          
          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full w-full md:w-64 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Search className="absolute right-3 top-3 text-gray-400" />
            </div>
            <div className="hidden md:flex space-x-4">
              <Clock className="text-blue-300" />
              <Calendar className="text-green-300" />
              <Users className="text-purple-300" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {/* School Selector (Mobile Menu) */}
          {isMobile ? (
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full bg-gray-800 text-white p-3 rounded-lg flex justify-between items-center"
              >
                {selectedSchool}
                <Filter />
              </button>
              {isMenuOpen && (
                <div className="absolute z-10 w-full bg-gray-800 rounded-lg shadow-2xl mt-2">
                  {schools.map(school => (
                    <button 
                      key={school}
                      onClick={() => {
                        setSelectedSchool(school);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left p-3 hover:bg-gray-700"
                    >
                      {school}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="w-1/4 pr-4 border-r border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Schools</h2>
              {schools.map(school => (
                <button 
                  key={school}
                  onClick={() => setSelectedSchool(school)}
                  className={`w-full text-left p-3 rounded-lg mb-2 ${
                    selectedSchool === school 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-700'
                  }`}
                >
                  {school}
                </button>
              ))}
            </div>
          )}

          {/* Timetable Section */}
          <div className="w-full md:w-3/4">
            {/* Day Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button 
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                onClick={() => {
                  const currentIndex = days.indexOf(selectedDay);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : days.length - 1;
                  setSelectedDay(days[prevIndex]);
                }}
              >
                <ChevronLeft />
              </button>
              <div className="flex space-x-2 overflow-x-auto">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-full text-sm md:text-base ${
                      selectedDay === day 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <button 
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                onClick={() => {
                  const currentIndex = days.indexOf(selectedDay);
                  const nextIndex = currentIndex < days.length - 1 ? currentIndex + 1 : 0;
                  setSelectedDay(days[nextIndex]);
                }}
              >
                <ChevronRight />
              </button>
            </div>

            {/* Classes */}
            <div className="space-y-4">
              {filteredClasses.length > 0 ? (
                filteredClasses.map(renderClassSlot)
              ) : (
                <div className="text-center text-gray-400 py-8 bg-gray-800 rounded-2xl">
                  No classes scheduled for this day
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Remainder Alarm */}
        {remainderAlarm && (
          <div className="fixed bottom-4 left-4 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-lg flex items-center space-x-2">
            <Clock className="text-blue-400" />
            <span>{remainderAlarm}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FuturisticTimetable;

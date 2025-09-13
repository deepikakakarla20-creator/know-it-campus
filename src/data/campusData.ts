import { CampusInfo } from '@/types/campus';

export const campusData: CampusInfo[] = [
  // Schedules
  {
    id: '1',
    category: 'schedules',
    question: 'What are the class hours?',
    answer: 'Classes run Monday-Friday from 8:00 AM to 9:00 PM. Most classes are 50 minutes long with 10-minute breaks between periods. Evening classes typically start at 6:00 PM or 7:30 PM.',
    tags: ['hours', 'timing', 'classes']
  },
  {
    id: '2',
    category: 'schedules',
    question: 'When does the semester start?',
    answer: 'Fall semester begins August 28th, Spring semester starts January 15th, and Summer session begins May 20th. Final exams are held during the last week of each semester.',
    tags: ['semester', 'dates', 'calendar']
  },

  // Facilities
  {
    id: '3',
    category: 'facilities',
    question: 'Where is the student center?',
    answer: 'The Student Center is located in Building C, right in the heart of campus. It houses student services, meeting rooms, study spaces, and the main cafeteria. Open daily 7 AM - 11 PM.',
    tags: ['location', 'building', 'services']
  },
  {
    id: '4',
    category: 'facilities',
    question: 'What gym facilities are available?',
    answer: 'The Campus Recreation Center features a full gym with cardio equipment, weight machines, free weights, basketball courts, and an indoor pool. Open 5 AM - midnight for students with valid ID.',
    tags: ['gym', 'recreation', 'fitness']
  },

  // Dining
  {
    id: '5',
    category: 'dining',
    question: 'What are the dining hall hours?',
    answer: 'Main Dining Hall: Breakfast 7-10 AM, Lunch 11 AM-3 PM, Dinner 5-9 PM. Campus Café: 7 AM-8 PM daily. Food trucks are on campus Tuesdays and Thursdays 11 AM-2 PM.',
    tags: ['hours', 'food', 'meals']
  },
  {
    id: '6',
    category: 'dining',
    question: 'Do you have vegetarian options?',
    answer: 'Yes! We offer extensive vegetarian and vegan options daily. The Green Station in the dining hall features plant-based meals, and all menu items are clearly labeled for dietary restrictions.',
    tags: ['vegetarian', 'vegan', 'dietary']
  },

  // Library
  {
    id: '7',
    category: 'library',
    question: 'What are library hours?',
    answer: 'Central Library: Monday-Thursday 7 AM-2 AM, Friday 7 AM-8 PM, Saturday 9 AM-8 PM, Sunday 10 AM-2 AM. During finals week, we extend to 24/7 access.',
    tags: ['hours', 'study', 'access']
  },
  {
    id: '8',
    category: 'library',
    question: 'How do I reserve a study room?',
    answer: 'Study rooms can be reserved online through the library portal or at the circulation desk. Rooms are available for 2-4 hour blocks. Group study rooms accommodate 4-8 people.',
    tags: ['study rooms', 'reservation', 'booking']
  },

  // Administrative
  {
    id: '9',
    category: 'administrative',
    question: 'Where is the registrar office?',
    answer: 'The Registrar\'s Office is in Administration Building, Room 150. Hours: Monday-Friday 8 AM-5 PM. You can also access most services online through the student portal.',
    tags: ['registrar', 'location', 'hours']
  },
  {
    id: '10',
    category: 'administrative',
    question: 'How do I add or drop classes?',
    answer: 'Classes can be added or dropped through the student portal during the first two weeks of the semester. After that, you\'ll need to submit a petition with your academic advisor\'s approval.',
    tags: ['enrollment', 'classes', 'deadline']
  }
];
const initialData = [
  {
    id: 'todo',
    title: 'To-do',
    count: 3,
    cards: [
      { 
        id: 't1', 
        label: 'Dashboard', 
        priority: 'Medium', 
        title: 'Employee Details', 
        desc: 'Create a page where there is infor...', 
        assignees: 3, 
        comments: 12 
      },
      { 
        id: 't2', 
        label: 'Mobile app', 
        priority: 'Low', 
        title: 'Darkmode version', 
        desc: 'Darkmode version for all screens', 
        assignees: 2, 
        comments: 10 
      },
      { 
        id: 't3', 
        label: 'Dashboard', 
        priority: 'Medium', 
        title: 'Super Admin Role', 
        desc: '', 
        assignees: 0, 
        comments: 0 
      },
    ],
  },
  {
    id: 'progress',
    title: 'On Progress',
    count: 10, 
    cards: [
      { 
        id: 'p1', 
        label: 'Dashboard', 
        priority: 'High', 
        title: 'Super Admin Role', 
        desc: '', 
        assignees: 2, 
        comments: 8 
      },
      { 
        id: 'p2', 
        label: 'Mobile app', 
        priority: 'Medium', 
        title: 'Settings page', 
        desc: '', 
        assignees: 1, 
        comments: 45 
      },
      { 
        id: 'p3', 
        label: 'Dashboard', 
        priority: 'Medium', 
        title: 'KPI and Employee Statistics', 
        desc: 'Create a design that displays KPIs...', 
        assignees: 3, 
        comments: 3 
      },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    count: 2,
    cards: [
      { 
        id: 'r1', 
        label: 'Dashboard', 
        priority: 'Medium', 
        title: 'Customer Role', 
        desc: '', 
        assignees: 2, 
        comments: 10 
      },
      { 
        id: 'r2', 
        label: 'Dashboard', 
        priority: 'High', 
        title: 'Admin Role', 
        desc: 'set up with relevant information s...', 
        assignees: 3, 
        comments: 12 
      },
    ],
  },
  {
    id: 'completed',
    title: 'Completed',
    count: 20, 
    cards: [
      { 
        id: 'c1', 
        label: 'Mobile app', 
        priority: 'Low', 
        title: 'Design system & Style gu...', 
        desc: '', 
        assignees: 3, 
        comments: 12 
      },
      { 
        id: 'c2', 
        label: 'Dashboard', 
        priority: 'Medium', 
        title: 'Component & Color style', 
        desc: 'set up with relevant information s...', 
        assignees: 3, 
        comments: 3 
      },
      { 
        id: 'c3', 
        label: 'Dashboard', 
        priority: 'High', 
        title: 'Moodboarding and List s...', 
        desc: 'set up with relevant information s...', 
        assignees: 0, 
        comments: 0 
      },
    ],
  },
];

export default initialData;
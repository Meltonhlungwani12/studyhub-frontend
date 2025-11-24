// src/data/gradeData.js

export const gradesData = {
  8: {
    grade: 8,
    gradeLevel: 'Grade 8 - Senior Phase',
    subjects: [
      'Mathematics',
      'English',
      'Xitsonga',
      'Life Orientation',
      'Natural Sciences',
      'Geography',
      'History',
      'Technology',
      'Creative Arts',
    ],
  },
  9: {
    grade: 9,
    gradeLevel: 'Grade 9 - Senior Phase',
    subjects: [
      'Mathematics',
      'English',
      'Xitsonga',
      'Life Orientation',
      'Natural Sciences',
      'Geography',
      'History',
      'Technology',
      'Creative Arts',
    ],
  },
  10: {
    grade: 10,
    gradeLevel: 'Grade 10 - FET Phase',
    subjects: [
      'Mathematics',
      'English',
      'Xitsonga',
      'Life Orientation',
      'Physical Sciences',
      'Physics',
      'Chemistry',
      'Life Sciences',
      'Geography',
      'History',
      'Accounting',
      'Business Studies',
      'Economics',
      'Tourism',
    ],
  },
  11: {
    grade: 11,
    gradeLevel: 'Grade 11 - FET Phase',
    subjects: [
      'Mathematics',
      'English',
      'Xitsonga',
      'Life Orientation',
      'Physical Sciences',
      'Physics',
      'Chemistry',
      'Life Sciences',
      'Geography',
      'History',
      'Accounting',
      'Business Studies',
      'Economics',
      'Tourism',
    ],
  },
  12: {
    grade: 12,
    gradeLevel: 'Grade 12 - FET Phase',
    subjects: [
      'Mathematics',
      'English',
      'Xitsonga',
      'Life Orientation',
      'Physical Sciences',
      'Physics',
      'Chemistry',
      'Life Sciences',
      'Geography',
      'History',
      'Accounting',
      'Business Studies',
      'Economics',
      'Tourism',
    ],
  },
};

// Resources by subject with direct download links from Google Drive
export const resourcesBySubject = {
  'Mathematics': [
    {
      name: 'Grade 8 Mathematics Past Papers',
      type: 'past-papers',
      downloads: 124,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_1',
    },
    {
      name: 'Grade 12 Calculus Guide',
      type: 'notes',
      downloads: 892,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_2',
    },
  ],
  'English': [
    {
      name: 'Grade 12 English Past Papers',
      type: 'past-papers',
      downloads: 923,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_3',
    },
    {
      name: 'Essay Writing Guide',
      type: 'document',
      downloads: 612,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_4',
    },
  ],
  'Physical Sciences': [
    {
      name: 'Grade 12 Physical Sciences Past Papers',
      type: 'past-papers',
      downloads: 1156,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_5',
    },
  ],
  'Life Sciences': [
    {
      name: 'Grade 12 Life Sciences Past Papers',
      type: 'past-papers',
      downloads: 967,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_6',
    },
  ],
  'History': [
    {
      name: 'Grade 12 History Past Papers',
      type: 'past-papers',
      downloads: 856,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_7',
    },
  ],
  'Geography': [
    {
      name: 'Grade 12 Geography Past Papers',
      type: 'past-papers',
      downloads: 745,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_8',
    },
  ],
  'Accounting': [
    {
      name: 'Grade 12 Accounting Past Papers',
      type: 'past-papers',
      downloads: 723,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_9',
    },
  ],
  'Business Studies': [
    {
      name: 'Grade 12 Business Studies Past Papers',
      type: 'past-papers',
      downloads: 689,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_10',
    },
  ],
  'Economics': [
    {
      name: 'Grade 12 Economics Past Papers',
      type: 'past-papers',
      downloads: 598,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_11',
    },
  ],
  'Tourism': [
    {
      name: 'Grade 12 Tourism Past Papers',
      type: 'past-papers',
      downloads: 412,
      link: 'https://drive.google.com/uc?export=download&id=FILE_ID_12',
    },
  ],
  // Subjects without resources
  'Life Orientation': [],
  'Xitsonga': [],
  'Technology': [],
  'Creative Arts': [],
};

// Function to get resources by grade and subject
export const getResourcesByGradeAndSubject = (grade, subject) => {
  const resources = resourcesBySubject[subject] || [];
  return resources.filter(resource => resource.name.includes(`Grade ${grade}`));
};

// !! STATUS CAN BE: ACTIVE, INACTIVE, ADMIN MANDATED, REPEALED

const TITLES_DATA = [
  {
    name: 'Title 1 - Criminal Code',
    color: '#dce3e6',
    chapters: [
      {
        name: 'SUBTITLE 1 - OFFENSES AGAINST THE PUBLIC',
        subchapters: [
          {name: 'Chapter I - Offenses Against the State',
            provisions: [
              { 
                sec: '1 F.S.C. § 1101', 
                title: 'Unauthorized distribution of classified information', 
                text: 'Any person who knowingly and willfully distributes, or otherwise makes available to an unauthorized person, or uses in any manner prejudicial to the safety or interest of the State or for the benefit of any foreign government any classified or military information shall be guilty of a felony.',
                subsections: [],
                status: 'ACTIVE',
                crimeType: 'FELONY',
                sentence: 'Sentence: 30 Minutes'
              },
              { 
                sec: '1 F.S.C. § 1102', 
                title: 'Espionage', 
                text: 'Any person who distributes, or attempt to distribute, classified information to foreign governments, with intent or reason to believe that it is to be used to the injury of the State of Mayflower or advantage of a foreign government shall be guilty of a felony.',
                subsections: [],
                status: 'INACTIVE',
                crimeType: 'FELONY',
                sentence: 'Sentence: 60 Minutes'
              },
            ],
          },
          {name: 'Chapter II - Documentation Related Offenses',
            provisions: [
              { 
                sec: '1 F.S.C. § 1201', 
                title: 'Concealing/destroying evidence', 
                text: 'Any person who corruptly alters, destroys, mutilates, or conceals a record, document, or other object, or attempts to do so, with the intent to impair the object’s integrity or availability for use in any matter within the jurisdiction of the executive, legislative, or judicial branch of the Government of the State of Mayflower, shall be guilty of a felony.',
                subsections: [],
                status: 'ACTIVE'
              },
              { 
                sec: '1 F.S.C. § 1202', 
                title: 'Tampering with Public Records', 
                text: 'Any individual who misrepresents, destroys, or falsifies official documents or public records shall be guilty of a felony.',
                subsections: [],
                status: 'ACTIVE'
              },
            ]
          },
        ],
      },

      {
        name: 'SUBTITLE 2 - OFFENSES AGAINST THE PLAYER',
        subchapters: [
          {
            name: 'Chapter I - Homicide Offenses',
            provisions: [
              { 
                sec: '1 F.S.C. § 2101', 
                title: 'First-degree murder', 
                text: 'Any person who intentionally and maliciously kills another person with premeditation, or who kills whilst in the commission of a felony, or who kills a protected person in the commission of their duties, shall be guilty of a felony.',
                subsections: [],
                status: 'ACTIVE'
              },
              { 
                sec: '1 F.S.C. § 2102', 
                title: 'Second-degree murder', 
                text: 'Any person who intentionally kills another person with intent to kill or commit great bodily harm shall be guilty of a felony.',
                subsections: [],
                status: 'ACTIVE'
              },
            ],
          },
          {name: 'Chapter II - Bodily Harm and Threat Offenses',
            provisions: [
              { 
                sec: '1 F.S.C. § 2201', 
                title: 'Battery', 
                text: 'Any person who unlawfully and maliciously applies physical force to another person without that person\'s consent shall be guilty of a misdemeanor.',
                subsections: [],
                status: 'REPEALED'
              },
              { 
                sec: '1 F.S.C. § 2202', 
                title: 'Assault', 
                text: 'Any person who willfully and maliciously attempts to, or causes reasonable fear or apprehension that they are going to touch or harm another person without that person\'s consent shall be guilty of a misdemeanor.',
                subsections: [],
                status: 'ADMIN MANDATED'
              },
            ]
          },
        ]
      },
    ],
  },

  {
    name: 'Title 2 — Administrator Mandates',
    color: '#e7dde9',
    chapters: [
      {
        name: 'SUBTITLE 1 - GENERAL PROVISIONS',
        subchapters: [
          {
            name: 'Chapter I - Administratorship Composition',
            provisions: [
              { 
                sec: '2 F.S.C. § 1101', 
                text: 'The membership of the Central Authority shall be composed of the following individuals:',
                subsections: [
                  { sec: '(a)', text: 'SuperTrooper178' },
                  { sec: '(b)', text: 'g_renaderskiy' },
                ],
                status: 'ADMIN MANDATED'
              },
            ]
          },
        ]
      },

      {
        name: 'SUBTITLE 2 - STATE REGISTRAR\'S OFFICE',
        subchapters: [
          {
            name: 'Chapter I - Office Composition',
            provisions: [
              { 
                sec: '2 F.S.C. § 1101', 
                text: 'The membership of the Office of the State Registrar shall be composed of the following individuals:',
                subsections: [
                  { sec: '(a)', text: '1onzok, State Registrar' },
                  { sec: '(b)', text: 'g_renaderskiy' },
                ],
                status: 'ADMIN MANDATED'
              },
            ]
          },
        ]
      }
    ]
  },
];
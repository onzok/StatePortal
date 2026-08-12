// !! STATUS CAN BE: ACTIVE, INACTIVE, ADMIN MANDATED, REPEALED, BY CONVICTION

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
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 30 Minutes'
              },
              { 
                sec: '1 F.S.C. § 1102', 
                title: 'Espionage', 
                text: 'Any person who distributes, or attempt to distribute, classified information to foreign governments, with intent or reason to believe that it is to be used to the injury of the State of Mayflower or advantage of a foreign government shall be guilty of a felony.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 60 Minutes'
              },
              { sec: '1 F.S.C. § 1103', 
                title: 'Unlawful Assembly Against the State', 
                text: 'Any individual who knowingly gathers, conspires, or participates in an assembly with the purpose of violently opposing, obstructing, or overthrowing the lawful government of the State of Fairmont shall be guilty of unlawful assembly against the State, a felony offense, and shall be subject to the penalties prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 45 Minutes'
              },
              { sec: '1 F.S.C. § 1104', 
                title: 'Insurrection', 
                text: 'Any individual who, alone or in concert with others, engages in open and armed resistance to the execution of the laws of the State of Fairmont, or seizes property or facilities of the State by force, shall be guilty of insurrection, a felony offense, and shall be subject to the penalties prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 30 Minutes'
              },
              { sec: '1 F.S.C. § 1105', 
                title: 'Criminal Anarchy', 
                text: 'Any individual who, with knowledge and deliberate intent, commits a felony offense to intimidate, coerce, or otherwise influence the government of the State of Fairmont, or any political subdivision or agency thereof, or to obstruct, alter, or impede lawful governmental policy or conduct, shall be guilty of criminal anarchy, a felony offense, and shall be subject to the penalties prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 55 Minutes'
              },
              { sec: '1 F.S.C. § 1106', 
                title: 'Providing Aid to Enemies of the State', 
                text: 'Any individual who, with knowledge and deliberate intent, provides weapons, funds, shelter, information, or other assistance to a foreign adversary, hostile power, or armed group engaged in conflict against the State of Fairmont shall be guilty of providing aid to enemies of the State, a felony offense, and shall be subject to the penalties prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 55 Minutes'
              },
              { sec: '1 F.S.C. § 1107', 
                title: 'Treason', 
                text: 'Any individual who, with intent to overthrow, undermine, or wage war against the State of Fairmont, levies force, adheres to enemies of the State, or provides material aid to such enemies, shall be guilty of treason, a felony offense, and shall be subject to the penalties prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
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
                text: 'Any individual who knowingly and intentionally destroys, alters, or conceals evidence that is or will be presented in a judicial or administrative proceeding, with the specific intent to prevent such evidence from being introduced or considered, shall be guilty of tampering with evidence, a felony offense, and shall be subject to the penalties prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 55 Minutes / Fine: $1,200',
              },
              { 
                sec: '1 F.S.C. § 1202', 
                title: 'Tampering with Public Records', 
                text: 'Any individual who misrepresents, destroys, or falsifies official documents or public records shall be guilty of a felony.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 40 Minutes'
              },
              { sec: '1 F.S.C. § 1203', 
                title: 'Falsification of Official Documents', 
                text: '',
                subsections: [ 
                  { sec: '(a)', text: 'Any individual who knowingly makes a false statement, report, or declaration to a law enforcement officer, prosecutor, or other authorized official regarding an unlawful act shall be guilty of a misdemeanor, and shall be subject to the penalties prescribed by law.' }, 
                  { sec: '(b)', text: 'Any State-certified law enforcement officer who knowingly makes false, misleading, or embellished statements in an official arrest report, warrant return, warrant request, citation, or any other official document related to the enforcement of the law shall be guilty of a felony, and shall be subject to prosecution and punishment in accordance with the law.' },
                ],
                status: 'ACTIVE',
                crimeType: 'MISDEMEANOR',
                sentence: 'Sentence: 40 Minutes'
              },
            ]
          },

          {name: 'Chapter III - Offenses Relating to Public Service',
            provisions: [
              { 
                sec: '1 F.S.C. § 1301', 
                title: 'Felony Misconduct', 
                text: 'Any person who, with corrupt intent, abuses or misuses their position, as defined by law, to obtain a personal benefit for themselves or for another, or who engages in conduct that results in a threat to life or public safety, shall be guilty of a felony and shall be subject to prosecution and penalties as prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 60 Minutes',
              },
              { 
                sec: '1 F.S.C. § 1302', 
                title: 'Gross Misconduct', 
                text: 'Any person who intentionally and immorally abuses their position, as defined by law, with corrupt intent, where such abuse does not result in a threat to life or public safety, shall be guilty of a felony and shall be subject to prosecution and penalties as provided by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'FELONY',
                sentence: 'Sentence: 45 Minutes'
              },
              { sec: '1 F.S.C. § 1303', 
                title: 'Misconduct', 
                text: 'Any person who unintentionally and improperly abuses their official position, as defined by law, to gain any benefit for themselves or for their associates, shall be guilty of a misdemeanor and shall be subject to prosecution and penalties as prescribed by law.',
                subsections: [],
                status: 'BY-CONVICTION',
                crimeType: 'MISDEMEANOR',
                sentence: 'Sentence: 15 Minutes'
              },
              { sec: '1 F.S.C. § 1304', 
                title: 'Failure to Identify', 
                text: 'Any person who willfully fails or refuses to identify themselves by either neglecting to provide an identification card or license, failing to provide a username, or refusing to remove a ski mask when lawfully ordered to do so by a law enforcement officer, traffic accident investigation officer, or traffic infraction enforcement officer during a lawful detention, shall be guilty of a misdemeanor and shall be subject to prosecution and penalties as prescribed by law.',
                subsections: [],
                status: 'ACTIVE',
                crimeType: 'MISDEMEANOR',
                sentence: 'Sentence: 7 Minutes / $350 Fine'
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
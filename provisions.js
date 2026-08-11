// ============================================================
//  FAIRMONT STATE CODE — PROVISIONS DATA
//  Edit this file to add, remove, or modify titles and sections.
// ============================================================

const TITLES_DATA = [
  {
    name: 'Title 1 — General Provisions',
    // Color for the code block background (hex or any valid CSS color)
    color: '#e8f4f8',  // Light blue
    code: [
      { sec: '§ 1-101', text: 'This Code shall be known as the Fairmont State Code.' },
      {
        sec: '§ 1-102',
        text: 'Those who Snow',
        subsections: [
          { sec: '(a)', text: 'Election' },
          { sec: '(b)', text: '"State" means the State of Fairmont.' },
          { sec: '(c)', text: '"Code" means the Fairmont State Code.' },
        ]
      },
      { sec: '§ 1-103', text: 'Severability. If any provision of this Code is held invalid, the remainder shall not be affected.' },
    ]
  },

  {
    name: 'Title 2 — Vehicle Code',
    color: '#f0f4e8',  // Light green
    code: [
      { sec: '§ 2-101', text: 'This title governs the operation of vehicles on public roads.' },
      {
        sec: '§ 2-102',
        text: 'Vehicle Definitions',
        subsections: [
          { sec: '(a)', text: '"Vehicle" means any device used for transportation.' },
          { sec: '(b)', text: '"Driver" means any person operating a vehicle.' },
          { sec: '(c)', text: '"Roadway" means the paved surface intended for vehicle travel.' },
        ]
      },
      { sec: '§ 2-103', text: 'All vehicles must be registered with the Department of Motor Vehicles.' },
      { sec: '§ 2-104', text: 'Speed limits shall be posted on all state highways.' },
    ]
  },

  {
    name: 'Title 3 — Alcoholic Beverages',
    color: '#f8ece8',  // Light peach/red
    code: [
      { sec: '§ 3-301', text: 'The State shall regulate the manufacture, distribution, and sale of alcoholic beverages.' },
      { sec: '§ 3-302', text: 'Retail sales are prohibited between 2:00 a.m. and 8:00 a.m. local time.' },
      {
        sec: '§ 3-303',
        text: 'Licensing Requirements',
        subsections: [
          { sec: '(a)', text: 'All establishments must obtain a license from the Alcoholic Beverage Control Board.' },
          { sec: '(b)', text: 'Licenses must be renewed annually.' },
          { sec: '(c)', text: 'Licensed premises must display their permit in a conspicuous location.' },
        ]
      },
      { sec: '§ 3-304', text: 'The legal drinking age in the State of Fairmont is 21 years.' },
    ]
  },

  {
    name: 'Title 4 — Banking & Finance',
    color: '#e8f0e8',  // Light sage
    code: [
      { sec: '§ 4-401', text: 'The State Banking Commission shall charter and supervise all state-chartered banks.' },
      { sec: '§ 4-402', text: 'Deposits in state banks are insured up to $250,000 by the Fairmont Deposit Fund.' },
      {
        sec: '§ 4-403',
        text: 'Interest Rates',
        subsections: [
          { sec: '(a)', text: 'The maximum interest rate on consumer loans shall not exceed 24% per annum.' },
          { sec: '(b)', text: 'Commercial loan rates shall be negotiated between the parties.' },
        ]
      },
      { sec: '§ 4-404', text: 'Financial institutions must submit quarterly reports to the Commission.' },
    ]
  },

  {
    name: 'Title 5 — Civil Procedure',
    color: '#f0f0f8',  // Light lavender
    code: [
      { sec: '§ 5-501', text: 'This title governs the practice and procedure in all civil actions in the state courts.' },
      { sec: '§ 5-502', text: 'Service of process may be made by personal delivery or by certified mail.' },
      { sec: '§ 5-503', text: 'A party may demand a jury trial by filing a written demand within 10 days.' },
      {
        sec: '§ 5-504',
        text: 'Statute of Limitations',
        subsections: [
          { sec: '(a)', text: 'Contract claims: 4 years.' },
          { sec: '(b)', text: 'Tort claims: 2 years.' },
          { sec: '(c)', text: 'Fraud claims: 5 years from the date of discovery.' },
        ]
      },
    ]
  },

  {
    name: 'Title 6 — Education',
    color: '#f8f4e8',  // Light cream
    code: [
      { sec: '§ 6-601', text: 'The State Board of Education shall oversee all public schools and educational programs.' },
      { sec: '§ 6-602', text: 'Education is compulsory for children between the ages of 6 and 16.' },
      { sec: '§ 6-603', text: 'The State shall provide funding for special education services.' },
    ]
  },

  {
    name: 'Title 7 — Environmental Protection',
    color: '#e8f4e8',  // Light mint
    code: [
      { sec: '§ 7-701', text: 'The Department of Environmental Quality shall protect and preserve the natural resources.' },
      {
        sec: '§ 7-702',
        text: 'Pollution Control',
        subsections: [
          { sec: '(a)', text: 'No person shall discharge pollutants into state waters without a valid permit.' },
          { sec: '(b)', text: 'Air quality standards shall be maintained in accordance with federal guidelines.' },
        ]
      },
      { sec: '§ 7-703', text: 'The State encourages the use of renewable energy and sustainable technologies.' },
    ]
  },

  {
    name: 'Title 8 — Health & Safety',
    color: '#fcece8',  // Light coral
    code: [
      { sec: '§ 8-801', text: 'The Department of Health shall promote public health and prevent the spread of disease.' },
      { sec: '§ 8-802', text: 'All food establishments must comply with state sanitation and safety standards.' },
      {
        sec: '§ 8-803',
        text: 'Immunization Requirements',
        subsections: [
          { sec: '(a)', text: 'Vaccinations are required for school entry unless exempted by law.' },
          { sec: '(b)', text: 'Medical exemptions must be documented by a licensed physician.' },
        ]
      },
    ]
  },

  {
    name: 'Title 9 — Labor & Employment',
    color: '#e8ecf8',  // Light steel blue
    code: [
      { sec: '§ 9-901', text: 'The State minimum wage shall be adjusted annually based on the cost of living.' },
      {
        sec: '§ 9-902',
        text: 'Workplace Safety',
        subsections: [
          { sec: '(a)', text: 'Employers must provide workers with a safe and healthy workplace.' },
          { sec: '(b)', text: 'OSHA standards shall apply to all places of employment.' },
        ]
      },
      { sec: '§ 9-903', text: 'Discrimination in employment based on race, gender, or religion is prohibited.' },
    ]
  },

  {
    name: 'Title 10 — Taxation',
    color: '#f8f0e8',  // Light warm gray
    code: [
      { sec: '§ 10-1001', text: 'The State shall impose a sales tax of 6% on all tangible personal property.' },
      {
        sec: '§ 10-1002',
        text: 'Income Tax',
        subsections: [
          { sec: '(a)', text: 'Income tax rates are progressive, ranging from 2% to 7.5%.' },
          { sec: '(b)', text: 'Tax returns must be filed by April 15 of each year.' },
          { sec: '(c)', text: 'Penalties shall apply for late filing.' },
        ]
      },
      { sec: '§ 10-1003', text: 'The State may provide tax credits for charitable contributions.' },
    ]
  }
];

// ============================================================
//  EXPORT (for use in HTML with <script src="...">)
// ============================================================
// If you're using this as a module, uncomment the line below:
// export { TITLES_DATA };
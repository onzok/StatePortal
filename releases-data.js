(function() {
  'use strict';

  const RELEASES_DATA = [
    {
      id: 1,
      title: 'Notice from the Registrar',
      date: 'August 14th, 2026',
      pdfLink: 'https://drive.google.com/file/d/1QxqOYA8Yo62twkS2fppiAwks-w9OCoQc/view?usp=sharing',
      description: 'Notice from the State Registrar regarding the establishment of the Fairmont State Code.'
    },
  ];

  window.RELEASES_DATA = RELEASES_DATA;

  window.getRecentReleases = function(count) {
    const sorted = [...RELEASES_DATA].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return sorted.slice(0, count || 3);
  };

  window.searchReleases = function(query) {
    const q = query.toLowerCase().trim();
    if (!q) return RELEASES_DATA;
    return RELEASES_DATA.filter(r => 
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q)
    );
  };

})();
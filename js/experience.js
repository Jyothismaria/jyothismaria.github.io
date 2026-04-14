const expData = {
  wayfair: {
    role: 'AI Extern',
    company: 'Wayfair',
    date: 'Mar 2026 – Present · Remote',
    bullets: [
      'Building AI agents using n8n to automate workflows for trend detection, competitor tracking, and marketing content generation.',
      'Conducting trend analysis across the home goods sector — pricing shifts, product launches, consumer demand patterns.',
      'Consolidating agent outputs into a live-updating Google Sheets dashboard integrating trend signals and AI-generated insights.',
      'Designing structured data pipelines to extract and transform competitive intelligence into scalable reporting frameworks.'
    ],
    tags: ['n8n', 'AI Agents', 'Python', 'Google Sheets', 'Trend Analysis']
  },
  'ccr-senior': {
    role: 'Senior Research Aide — Data Science & Analytics',
    company: 'Center for Computational Research, UB',
    date: 'Feb 2025 – Nov 2025 · Buffalo, NY',
    bullets: [
      'Applied statistical modeling and data mining to 100K+ record datasets to identify utilization trends.',
      'Designed and evaluated ML models in Python — improved accuracy from 14% to 62%.',
      'Built and maintained Python-based ETL pipelines for feature engineering, model training, and structured data transformation.',
      'Developed interactive KPI dashboards and recurring ad-hoc reports for cross-functional stakeholders.',
      'Implemented reproducible ML workflows with cross-validation, precision, recall, and F1-score evaluation.'
    ],
    tags: ['Python', 'scikit-learn', 'pandas', 'ML Pipelines', 'Power BI', 'MLflow']
  },
  'ta-stats': {
    role: 'Teaching Assistant — Statistical Learning II',
    company: 'University at Buffalo',
    date: 'Aug 2025 – Sep 2025 · Buffalo, NY',
    bullets: [
      'Supported instruction in Bayesian statistical learning, clustering, Gaussian mixture models, regression, and Gaussian Process modeling.',
      'Led weekly office hours and project guidance, mentoring students in implementing statistical models in R.',
      'Assisted students in translating mathematical concepts into reproducible modeling pipelines.'
    ],
    tags: ['R', 'Bayesian ML', 'Gaussian Processes', 'Clustering', 'Regression']
  },
  'ta-sw': {
    role: 'Teaching Assistant — Software Quality in Practice',
    company: 'University at Buffalo',
    date: 'Jan 2024 – May 2024 · Buffalo, NY',
    bullets: [
      'Led biweekly lab sessions for 27 students on debugging and software quality techniques.',
      'Guided students through fault isolation, root cause analysis, and test-driven debugging using industry tools.',
      'Evaluated assignments and provided detailed technical feedback on testing, debugging workflows, and code quality.'
    ],
    tags: ['Debugging', 'Static Analysis', 'Testing Frameworks', 'Code Quality']
  },
  'ccr-intern': {
    role: 'Summer Research Intern — Data Analysis',
    company: 'Center for Computational Research, UB',
    date: 'May 2023 – Aug 2023 · Buffalo, NY',
    bullets: [
      'Reduced algorithm runtime from 40 min → 5 sec by reengineering performance-critical components in C++ (Rcpp).',
      'Identified operational inefficiencies through statistical time-series analysis of system usage patterns in R.',
      'Evaluated computational performance by analyzing parallel scaling and convergence behavior using OpenMPI.',
      'Communicated analytical findings through peer-reviewed poster presentation at the PEARC Conference.'
    ],
    tags: ['R', 'C++', 'Rcpp', 'OpenMPI', 'Time-Series Analysis', 'PEARC']
  }
};

let activeId = 'wayfair';

function renderDetail(id) {
  const d = expData[id];
  document.getElementById('detail-content').innerHTML = `
    <div class="detail-top">
      <div>
        <div class="detail-role">${d.role}</div>
        <div class="detail-company">${d.company}</div>
      </div>
      <div class="detail-date">${d.date}</div>
    </div>
    <ul class="detail-bullets">
      ${d.bullets.map(b => `<li>${b}</li>`).join('')}
    </ul>
    <div class="detail-tags">
      ${d.tags.map(t => `<span>${t}</span>`).join('')}
    </div>
  `;
}

renderDetail('wayfair');

document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('click', () => {
    const id = node.dataset.id;
    if (id === activeId) return;

    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    node.classList.add('active');

    const panel = document.getElementById('detail-panel');
    panel.classList.remove('open');

    setTimeout(() => {
      renderDetail(id);
      panel.classList.add('open');
      activeId = id;
    }, 320);
  });
});

export const links = {
  github: 'https://github.com/siddharth0444',
  linkedin: 'https://www.linkedin.com/in/siddharthrajak',
  email: 'devrajak22@gmail.com',
}

export const navItems = [
  { label: 'Home', href: '#top', icon: '★' },
  { label: 'About', href: '#about', icon: '●' },
  { label: 'Projects', href: '#projects', icon: '▦' },
  { label: 'Contact', href: '#contact', icon: '◆' },
]

export const projects = [
  {
    id: 'credit-risk',
    status: 'Completed',
    title: 'Credit Risk Scorer',
    tagline:
      'Predicts which credit card customers will miss next month’s payment, explains every score, and sets the flag threshold by what each mistake costs. Built on 30,000 real customers.',
    metrics: ['ROC-AUC 0.780', '27% lower cost', '72% of defaulters caught'],
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'pytest'],
    figure: 'creditCost',
    figureAlt:
      'Cost per customer at each decision threshold. The model reaches its lowest cost, 0.55, at threshold 0.17, well below flagging everyone or no one.',
    code: 'https://github.com/siddharth0444/credit-risk-scorer',
    demo: 'https://credit-risk-scorer-h3p79hjdzkyvnondvpcp95.streamlit.app/',
    theme: 'dark',
  },
  {
    id: 'air-quality',
    status: 'Completed',
    title: 'India Air Quality',
    tagline:
      'Did the 2020 lockdown really clean India’s air? A difference-in-differences study of 26 cities that corrects for pre-existing trends instead of a naive before-and-after.',
    metrics: ['NO₂ −39%', 'PM2.5 −33%', 'Robust to 6 alt. specs'],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'pytest'],
    figure: 'aqiLockdown',
    figureAlt:
      'Bar chart comparing a simple 2020 versus 2019 change with the trend-adjusted lockdown effect: PM2.5 down 33 percent and NO2 down 39 percent in the typical city.',
    code: 'https://github.com/siddharth0444/india-air-quality-analysis',
    theme: 'yellow',
  },
  {
    id: 'supportiq',
    status: 'MVP in progress',
    title: 'SupportIQ',
    tagline:
      'Reads support tickets, predicts their intent and sentiment, and flags the urgent ones for triage, served through FastAPI and a Streamlit dashboard.',
    metrics: ['TF-IDF + LogReg', 'Batch CSV API', 'CI passing'],
    stack: ['Python', 'scikit-learn', 'FastAPI', 'Streamlit', 'Plotly'],
    note: 'Trained on synthetic demo data for now. A human-labelled benchmark is next.',
    code: 'https://github.com/siddharth0444/supportiq-customer-support-intelligence',
    theme: 'blue',
  },
]

export const skills = [
  { name: 'Python & SQL', icon: '🐍', color: 'yellow' },
  { name: 'Pandas & NumPy', icon: '🐼', color: 'green', dark: true },
  { name: 'scikit-learn', icon: '🧠', color: 'pink', dark: true },
  { name: 'Statistics & causal inference', icon: '📊', color: 'blue', dark: true },
  { name: 'NLP (TF-IDF)', icon: '💬', color: 'mint' },
  { name: 'FastAPI & Streamlit', icon: '⚡', color: 'yellow' },
  { name: 'pytest & CI', icon: '✅', color: 'green', dark: true },
]

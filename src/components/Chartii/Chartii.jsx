const initialNodes = [
  {
    id: 'start',
    data: { label: 'TRADEMARK APPLICATION' },
    position: { x: 300, y: -120 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 220, fontWeight: 'bold' },
  },
  {
    id: 'exam',
    data: { label: 'EXAMINATION PROCESS' },
    position: { x: 300, y: -40 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 220, fontWeight: 'bold' },
  },

  // LEFT SIDE (ACCEPTED)
  {
    id: 'accepted',
    data: { label: 'ACCEPTED & ADVERTISED (Inviting Objections for 4 Months)' },
    position: { x: 50, y: 60 },
    style: { background: '#3b82f6', color: '#fff', borderRadius: '50px', width: 250, padding: 10, fontWeight: 'bold' },
  },
  {
    id: 'no-opp',
    data: { label: 'CERTIFICATE SHALL BE ISSUED' },
    position: { x: -50, y: 180 },
    style: { background: '#dcfce7', border: '1px solid #22c55e', width: 220 },
  },
  {
    id: 'opposed',
    data: { label: 'OPPOSED' },
    position: { x: 200, y: 180 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },

  // Opposition flow
  {
    id: 'counter',
    data: { label: 'COUNTER STATEMENT' },
    position: { x: 200, y: 260 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },
  {
    id: 'opp-evidence',
    data: { label: 'OPPONENT’S EVIDENCE' },
    position: { x: 200, y: 340 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },
  {
    id: 'app-evidence',
    data: { label: 'APPLICANT’S EVIDENCE' },
    position: { x: 200, y: 420 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },
  {
    id: 'reply-evidence',
    data: { label: 'EVIDENCE IN REPLY BY OPPONENT' },
    position: { x: 200, y: 500 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: 'hearing-left',
    data: { label: 'HEARING' },
    position: { x: 200, y: 580 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 200, fontWeight: 'bold' },
  },
  {
    id: 'cert-final',
    data: { label: 'CERTIFICATE SHALL BE ISSUED' },
    position: { x: 100, y: 660 },
    style: { background: '#dcfce7', border: '1px solid #22c55e', width: 220 },
  },
  {
    id: 'abandoned',
    data: { label: 'ABANDONED' },
    position: { x: 300, y: 660 },
    style: { background: '#fecaca', border: '1px solid #dc2626', width: 200 },
  },

  // RIGHT SIDE (OBJECTED)
  {
    id: 'objected',
    data: { label: 'OBJECTED' },
    position: { x: 550, y: 60 },
    style: { background: '#fee2e2', border: '1px solid #ef4444', width: 200 },
  },
  {
    id: 'reply',
    data: { label: 'REPLY TO EXAMINATION REPORT' },
    position: { x: 550, y: 140 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: 'hearing-right',
    data: { label: 'SHOW CAUSE HEARING' },
    position: { x: 550, y: 220 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 220, fontWeight: 'bold' },
  },
  {
    id: 'accepted2',
    data: { label: 'ACCEPTED & ADVERTISED' },
    position: { x: 450, y: 320 },
    style: { background: '#3b82f6', color: '#fff', borderRadius: '50px', width: 220 },
  },
  {
    id: 'refused',
    data: { label: 'REFUSED' },
    position: { x: 650, y: 320 },
    style: { background: '#fecaca', border: '1px solid #dc2626', width: 200 },
  },
  {
    id: 'review',
    data: { label: 'REVIEW PETITION' },
    position: { x: 450, y: 400 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },
  {
    id: 'appeal',
    data: { label: 'APPEAL' },
    position: { x: 650, y: 400 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },
];
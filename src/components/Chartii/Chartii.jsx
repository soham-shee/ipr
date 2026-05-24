import React, { useCallback } from 'react';
import ReactFlow, { 
  Background, 
  useNodesState, 
  useEdgesState, 
  MarkerType 
} from 'reactflow';
import 'reactflow/dist/style.css';

// Initial Nodes based on the flowchart logic
const initialNodes = [
  {
    id: '1',
    data: { label: 'Trademark Registration Procedure' },
    position: { x: 250, y: 0 },
    style: { background: '#3b82f6', color: '#fff', borderRadius: '50px', width: 250, padding: 10, fontWeight: 'bold' },
  },
  {
    id: '2',
    data: { label: 'Trademark Application' },
    position: { x: 250, y: 100 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '3',
    data: { label: 'Examination Process' },
    position: { x: 250, y: 200 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '4',
    data: { label: 'Accepted & Advertised (For Inviting Third Party Objections for 4 Months)' },
    position: { x: 50, y: 320 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: '5',
    data: { label: 'Certificate Shall Be Issued' },
    position: { x: 5, y: 440 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 150 },
  },
  {
    id: '6',
    data: { label: 'Opposed' },
    position: { x: 200, y: 440 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: '7',
    data: { label: 'Counter Statement' },
    position: { x: 200, y: 500 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 220, fontWeight: 'bold' },
  },
  {
    id: '8',
    data: { label: "Opponent's Evidence" },
    position: { x: 210, y: 570 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 200 },
  },
  {
    id: '9',
    data: { label: "Applicant's Evidence" },
    position: { x: 180, y: 700 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250},
  },
  {
    id: '10',
    data: { label: 'Evidence In Reply By The Opponent' },
    position: { x: 180, y: 780 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '11',
    data: { label: 'Hearing' },
    position: { x: 180, y: 840 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 250, fontWeight: 'bold' },
  },
  {
    id: '12',
    data: { label: 'Certificate Shall Be Issued' },
    position: { x: 5, y: 930 },
    style: { background: '#dcfce7', border: '1px solid #22c55e', width: 250, color: '#166534', fontWeight: 'bold' },
  },
  {
    id: '13',
    data: { label: 'Abandoned' },
    position: { x: 280, y: 930 },
    style: { background: '#fecaca', border: '1px solid #dc2626', width: 250, color: '#991b1b', fontWeight: 'bold' },
  },
  {
    id: '14',
    data: { label: 'Objected' },
    position: { x: 450, y: 320 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '15',
    data: { label: 'Reply To Examination Report/Objections' },
    position: { x: 450, y: 420 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '16',
    data: { label: 'Show Cause Hearing' },
    position: { x: 450, y: 520 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250},
  },
  {
    id: '17',
    data: { label: 'Accepted & Advertised' },
    position: { x: 440, y: 600 },
    style: { background: '#dcfce7', border: '1px solid #22c55e', width: 230, color: '#166534', fontWeight: 'bold' },
  },
  {
    id: '18',
    data: { label: 'Refused' },
    position: { x: 700, y: 600 },
    style: { background: '#fecaca', border: '1px solid #dc2626', width: 100, color: '#991b1b'},
  },
  {
    id: '19',
    data: { label: 'Review Petition' },
    position: { x: 440, y: 700 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250, color: '#991b1b', fontWeight: 'bold' },
  },
  {
    id: '20',
    data: { label: 'Appeal' },
    position: { x: 700, y: 700 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250, color: '#991b1b', fontWeight: 'bold' },
  },
];

// Defining the connections
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },

  { id: 'e2-3', source: '2', target: '3' },

  // Counter filed → normal path
  { id: 'e3-4', source: '3', target: '4' },

  // No response
  // { 
  //   id: 'e3-8',
  //   source: '3',
  //   target: '8-fail',
  //   type: 'smoothstep',
  //   style: { stroke: '#ef4444', strokeWidth: 2 },
  //   markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' }
  // },

  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
  { id: 'e9-10', source: '9', target: '10' },
  { id: 'e10-11', source: '10', target: '11' },
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e11-13', source: '11', target: '13' },
  { id: 'e3-14', source: '3', target: '14' },
  { id: 'e14-15', source: '14', target: '15' },
  { id: 'e15-16', source: '15', target: '16' },
  { id: 'e16-17', source: '16', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e18-19', source: '18', target: '19' },
  { id: 'e18-20', source: '18', target: '20' },
];

const ModernFlowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
      <ReactFlow
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  fitView
  fitViewOptions={{ padding: 0 }}

  nodesDraggable={false}
  nodesConnectable={false}
  elementsSelectable={false}
  panOnDrag={false}
  zoomOnScroll={false}
  zoomOnPinch={false}
  zoomOnDoubleClick={false}

  defaultEdgeOptions={{
    style: { stroke: '#64748b', strokeWidth: 1.5 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#64748b',
    },
  }}
>
  <Background color="transparent" gap={10} />
</ReactFlow>
    </div>
  );
};

export default ModernFlowchart;